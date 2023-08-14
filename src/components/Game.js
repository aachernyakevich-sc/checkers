import React, {useState} from "react";
import './Game.css';
import Board from "./Board";
const board = [
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
    const [checkers, setCheckers] = useState([
        [0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ])
    const handleClick = (e) => {
        let place = e;
        const copy = checkers.map((item) => item.slice())
        copy[place.slice(0,1)][place.slice(-1)] = 0;
        copy[1][0] = 1;
        setCheckers(copy);
    }

    return (
        <div className="wrapper">
            <Board cells={board} checkers={checkers} click={handleClick}/>
        </div>
    )
}

export default Game;