import React, {useState} from "react";
import './Game.css';
import Board from "./Board";
import checker from "./Checker";

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
const WHITE = "WHITE"
const BLACK = "BLACK"

const Game = () => {
    const [checkers, setCheckers] = useState([
        [{y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: 0, x:3, color: BLACK, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}],
        [{y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}],
        [{y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}],
        [{y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}],
        [{y: null, x:null, color: null, role: null},  {y: 4, x:1, color: BLACK, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}],
        [{y: 5, x:0, color: WHITE, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}],
        [{y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}],
        [{y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}, {y: null, x:null, color: null, role: null}],
    ])
    const [isCheckerActive, setIsCheckerActive] = useState(false);
    const [activeChecker, setActiveChecker] = useState({y: null, x:null, color: null, role: null});
    const [whereCanGo, setWhereCanGo] = useState( {
        yLeft: null,
        yRight: null,
        xLeft: null,
        xRight: null,
    });
    const [whoseTurn, setWhoseTurn] =useState(WHITE);
    let catchList = [];

    function areThereEnemy (x,y) {
        if (0 <= y && y <= 7 && 0<= x && x <= 7){
            return checkers[y][x].color !== null && checkers[y][x].color !== whoseTurn;
        } else return false;
    }

    function canDoCatch (x, y, whereToGoX, whereToGoY) {
        if (areThereEnemy(x+whereToGoX,y+whereToGoY)) {
            let newY = y+2*whereToGoY;
            let newX = y+2*whereToGoX;
            return ( 0 <= newY && newY <= 7 && 0<= newX && newX <= 7
                && checkers[newY][newX] !== null);
        } else return false;
    }

    function checkerCatchChecker (x, y) {
        return (canDoCatch(x,y,1,1)
            || canDoCatch(x,y,1,-1)
            || canDoCatch(x,y,-1,-1)
            || canDoCatch(x,y,-1,1)
        )
    }
    function creatingCatchList (nextColor, checkers) {
        checkers.forEach(row => {
            row.forEach ( checker => {
               if (checker.color === nextColor && checkerCatchChecker(checker.x, checker.y)) {
                    catchList.push(checker);
                }
            })
        });
    }

    //functioning for now
    function areTheyNear(x, y) {
        return (Math.abs(activeChecker.x - checkers[y][x].x) === 1)
            && (Math.abs(activeChecker.y - checkers[y][x].y) === 1)
    }
    function catchPossible(x, y) {
        if(areTheyNear(x,y) && !movePossible(x,y) && checkers[y][x].color !== activeChecker.color) {
            if (checkers[y][x] === 1 && activeChecker.x - checkers[y][x].x === 1) {
                if (activeChecker.y - checkers[y][x].y === 1) {
                    setWhereCanGo({xLeft: x-1, xRight: null, yLeft: x-1, yRight: null})
                } else {
                    setWhereCanGo({xLeft: x-1, xRight: null, yLeft: x+1, yRight: null})
                }
            } else if (checkers[y][x] === 1 && activeChecker.x - checkers[y][x].x === -1) {
                if (activeChecker.y - checkers[y][x].y === 1) {
                    setWhereCanGo({xLeft: null, xRight: x+1, yLeft: null, yRight: x-1})
                } else {
                    setWhereCanGo({xLeft: null, xRight: x+1, yLeft: null, yRight: x+1})
                }
            }
            // setHaveCatch(true);
            return true;
        }
        else {
            // setHaveCatch(false);
            return false;
        }
    }
    function  movePossible(x, y) {
        return (activeChecker.color !== null) && (whereCanGo.yLeft >= 0 || whereCanGo.yRight <= 7) &&
            (whereCanGo.xLeft >= 0 || whereCanGo.xRight <= 7) &&
            (whereCanGo.yLeft === y || whereCanGo.yRight === y) &&
            (whereCanGo.xLeft === x || whereCanGo.xRight === x)
            && (checkers[y][x].color === null);
    }

    const handleCheckerClick = (e, x, y) => {
        if(whoseTurn === checkers[y][x].color) {
            if (activeChecker.y === y && activeChecker.x === x) {
                setIsCheckerActive(false)
                setActiveChecker({x: null, y: null, color: null, role: null})
                setWhereCanGo({xLeft: null, xRight: null, yLeft: null, yRight: null})
            } else {
                setIsCheckerActive(true)
                setActiveChecker(checkers[y][x]);
                setWhereCanGo({
                    xLeft: x - 1,
                    xRight: x + 1,
                    yLeft: y - 1,
                    yRight: y + 1
                })
            }
        } else { e.stopPropagation()}
    }

    const handleCellClick = (e, x, y) => {
        if(isCheckerActive) {
            if (catchPossible(x, y)) {
                const copy = checkers.map((item) => item.slice());
                copy[activeChecker.y][activeChecker.x] = {x:null, y: null, color: null, role: null};
                copy[y][x]= {x:x, y: y, color: activeChecker.color, role: null};
                let yCaught = Math.abs(activeChecker.y - y);
                let xCaught = Math.abs(activeChecker.x - x);
                copy[yCaught][xCaught]= {x:null, y: null, color: null, role: null};
                setCheckers(copy);
                setWhereCanGo({xLeft: null, xRight: null, yLeft: null, yRight: null});
                setIsCheckerActive(false);
                setActiveChecker({x:null, y: null, color: null, role: null})
            } else
                if(movePossible(x, y)){
                const copy = checkers.map((item) => item.slice());
                copy[activeChecker.y][activeChecker.x] = {x:null, y: null, color: null, role: null};
                copy[y][x]= {x:x, y: y, color: activeChecker.color, role: null};
                setCheckers(copy);
                setWhereCanGo({xLeft: null, xRight: null, yLeft: null, yRight: null});
                setIsCheckerActive(false);
                setActiveChecker({x:null, y: null, color: null, role: null});
                let nextColor;
                    if (whoseTurn === WHITE) {
                        setWhoseTurn(BLACK);
                        nextColor = BLACK;
                    } else {
                        setWhoseTurn(WHITE);
                        nextColor = WHITE
                    }
            }
        }
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
                   catchPossible={catchPossible}
            />
            <p>{whoseTurn}</p>
        </div>
    )
}

export default Game;