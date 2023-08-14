import React from "react";
import './Board.css'
import Cell from "./Cell";

const Board = ({cells, click, checkers}) => {
        console.log(checkers);
        return (
            <div className="board">
                {
                    cells.map(
                        (row, i) => (
                            <>{
                                row.map((cell, j) => {
                                    return row[j] === 1
                                        ? <Cell class={i%2 === 0 ? "left" : "right"}
                                                key={i+" "+j}
                                                checker={checkers[i][j]}
                                                value={i+" "+j}
                                                onClick={click}/>
                                    : <></>
                                })
                            }</>
                        )
                    )
                }
            </div>
        )
}

export default Board;