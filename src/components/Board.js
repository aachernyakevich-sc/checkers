import React, {useState} from "react";
import './Board.css'
import Cell from "./Cell";

const [oddRow, setRow] = useState(true);
const cellPlacer = (index) => {
    let cellRow = "";
    cellRow oddRow ? ".odd": ".even";
    setRow(!oddRow);
    return cellRow;
}

const Board = ({cells, click}) => {
    return (
        <div className="board">
            {
                cells.map((cell, i) => (
                    <Cell class={} key={i} value={cell} onClick={() => click(i)}/>
                ))
            }
        </div>
    )
}

export default Board;