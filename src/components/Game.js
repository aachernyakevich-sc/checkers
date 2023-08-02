import React, {useState} from "react";
import './Game.css';
import Board from "./Board";

const Game = () => {
    const [board, setBoard] = useState(Array(32).fill(null))
    const handleClick = (index) => {
        const boardCopy = [...board];
        setBoard(boardCopy);
        alert("ho-ho");
    }
    return (
        <div className="wrapper">
            <Board cells={board} click={handleClick}/>
        </div>
    )
}

export default Game;