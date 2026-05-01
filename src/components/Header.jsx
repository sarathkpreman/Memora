export const Header=({ moves, score })=> {
    return (
        <div className="header">
            <h1>Memory Card Game</h1>
            <div className="game-status">
                <div className="status-item">
                    <span className="moves-label">Moves: </span>
                    <span className="value-label">{moves}</span>
                </div>
                <div className="status-item">
                    <span className="score-label">Score: </span>
                    <span className="value-label">{score}</span>
                </div>
            </div>
        </div>
    )
}