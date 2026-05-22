export const Card = ({ icon, onClick, isFlipped, isMatched }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} ${isMatched ? "matched" : ""}`}
      onClick={onClick}
    >
      <div className="card-back">?</div>
      <div className="card-front">{icon}</div>
    </div>
  );
};