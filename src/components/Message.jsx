export const Message = ({ isWon, moves, onReset }) => {
  if (!isWon) return null;

  return (
    <div className="message">
      <h2>Congratulations! You've completed the game!</h2>
      <p>You completed the game in {moves} moves!</p>
      <button className="reset-button" onClick={onReset}>Play Again</button>
    </div>
  );
};