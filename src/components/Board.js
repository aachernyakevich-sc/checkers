import React from "react";
import './Board.css'
import Cell from "./Cell";

const Board = ({cells,
                   checkers,
                   checkerClick,
                   cellClick,
                   activeChecker,
                   activator,
                   whereCanGo,
                   movePossible,
                   catchPossible
}) => {
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
                                            i={i}
                                            j={j}
                                            cellClick={cellClick}
                                            checkerClick={checkerClick}
                                            activator={activator}
                                            activeChecker={activeChecker}
                                            whereCanGo={whereCanGo}
                                            movePossible={movePossible}
                                            catchPossible={catchPossible}
                                    />
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