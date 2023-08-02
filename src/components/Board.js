import React from "react";
import './Board.css'
import Cell from "./Cell";

const Board = ({cells, click}) => {
    const generator = (cells) => {
        for (let i = 0; i<cells.length; i++) {

        }
    }
    return (
        <div className="board">
            {
                cells.map(
                    (cell, i) => (
                    <Cell class="cell" key={i} value={} onClick={() => click(i)}/>
                ))
            }
        </div>
    )
}

export default Board;