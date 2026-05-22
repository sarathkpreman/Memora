import { useGameLogic } from "./hooks/useGameLogic";
import { Header } from "./components/Header";
import cardIcons from "./data/cardValues";
import { Card } from "./components/Card";
import { Message } from "./components/Message";

function App() {
 
  const { card, score, moves, isWon, shuffleCards, handleClick } = useGameLogic(cardIcons);

  return (
    <div className="app">
      <Header moves={moves} score={score} onResest={shuffleCards} />
      <Message isWon={isWon} moves={moves} score={score} onReset={shuffleCards}/>
      <div className="game-container">
        <div className="game-board">
          {card.map((c) => (
            <Card
              key={c.id}
              icon={c.icon}
              isFlipped={c.isFlipped}
              isMatched={c.isMatched}
              onClick={() => handleClick(c)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;