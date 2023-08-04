import React from "react";
import './Board.css'
import Cell from "./Cell";

const Board = ({cells, click}) => {
        return (
            <div className="board">
                {
                    cells.map(
                        (row, i) => (
                            <>{
                                row.map((cell, j) => {
                                    if (row[j] === 1) {
                                        if(i%2 === 0){
                                            return <Cell class={"left"} key={i+" "+j} value={" "}
                                                         onClick={() => click(i)}/>
                                        } else {
                                            return <Cell class={"right"} key={i + " " + j} value={" "}
                                                         onClick={() => click(i)}/>
                                        }
                                    } else {
                                        <></>
                                    }
                                })
                            }</>

                        )
                    )
                }
            </div>
        )
}

export default Board;