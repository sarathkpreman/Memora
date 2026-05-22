import { useEffect, useRef, useState } from "react";

export const useGameLogic = (cardIcons) => { 
     
  const [card, setCard] = useState([]);
  const firstFlippedCard = useRef(null);
  const isLocked = useRef(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffleCards = () => {
    const shuffled = shuffleArray(cardIcons);
    const shuffledCards = shuffled.map((icon, index) => ({
      id: index,
      icon,
      isFlipped: false,
      isMatched: false,
    }));
    setCard(shuffledCards);
    setMoves(0);
    setScore(0);
    setIsWon(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleClick = (clickedCard) => {
    if (clickedCard.isFlipped || clickedCard.isMatched || isLocked.current) return;

    setCard(prev =>
      prev.map(c => c.id === clickedCard.id ? { ...c, isFlipped: true } : c)
    );

    if (firstFlippedCard.current === null) {
      firstFlippedCard.current = clickedCard;
    } else {
      isLocked.current = true;
      const firstCard = firstFlippedCard.current;
      firstFlippedCard.current = null;

      if (firstCard.icon === clickedCard.icon) {
        setTimeout(() => {
          setScore(prev => {
            const newScore = prev + 1;
            if (newScore === cardIcons.length / 2) setIsWon(true);
            return newScore;
          });
          setCard(prev =>
            prev.map(c =>
              c.id === firstCard.id || c.id === clickedCard.id
                ? { ...c, isMatched: true }
                : c
            )
          );
          isLocked.current = false;
        }, 500);
      } else {
        setTimeout(() => {
          setCard(prev =>
            prev.map(c =>
              c.id === firstCard.id || c.id === clickedCard.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          isLocked.current = false;
        }, 500);
      }
    }
    setMoves(prev => prev + 1);
  };

  return { card, score, moves, isWon, shuffleCards, handleClick };
}