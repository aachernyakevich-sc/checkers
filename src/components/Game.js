import React from "react";
import './Game.css';
import Board from "./Board";
let board = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0]
]
const Game = () => {

    const handleClick = () => {
        alert("ho-ho");
    }
    return (
        <div className="wrapper">
            <Board cells={board} click={handleClick}/>
        </div>
    )
}

export default Game;