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
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0],
        [0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ])
    const [isCheckerActive, setIsCheckerActive] = useState(false);
    const [activeChecker, setActiveChecker] = useState({x: null, y: null});
    const [whereCanGo, setWhereCanGo] = useState( {
        yLeft: null,
        yRight: null,
        xLeft: null,
        xRight: null,
    });
    
    function  movePossible(i,j) {
        return (whereCanGo.yLeft >= 0 || whereCanGo.yRight <= 7) &&
            (whereCanGo.xLeft >= 0 || whereCanGo.xRight <= 7) &&
            (whereCanGo.yLeft === i || whereCanGo.yRight === i) &&
            (whereCanGo.xLeft === j || whereCanGo.xRight === j) &&
            (checkers[i][j]===0);
    }

    const handleCheckerClick = (e, x, y) => {
            if (!isCheckerActive) {
                setActiveChecker({x, y})
                setWhereCanGo({
                    yLeft: y-1,
                    yRight: y+1,
                    xLeft: x-1,
                    xRight: x+1,
                })
            } else {
                setIsCheckerActive(false)
                setActiveChecker({x: null, y: null})
                setWhereCanGo({
                    yLeft: null,
                    yRight: null,
                    xLeft: null,
                    xRight: null,
                })
            }
    }

    const handleCellClick = (e, y, x) => {
        if(isCheckerActive) {
            if(movePossible(y,x)){
                const copy = checkers.map((item) => item.slice())
                copy[activeChecker.y][activeChecker.x] = 0;
                copy[y][x]=1;
                setCheckers(copy);
                setWhereCanGo({
                    yLeft: null,
                    yRight: null,
                    xLeft: null,
                    xRight: null,
                });
                setIsCheckerActive(false);
                setActiveChecker({x: null, y: null})
            }
        } else
        console.log("hi")
    }

    return (
        <div className="wrapper">
            <Board cells={board}
                   checkers={checkers}
                   checkerClick={handleCheckerClick}
                   cellClick={handleCellClick}
                   activator={setIsCheckerActive}
                   activeChecker={activeChecker}
                   whereCanGo={whereCanGo}
                   movePossible={movePossible}
            />
        </div>
    )
}

export default Game;