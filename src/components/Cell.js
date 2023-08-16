import React from "react";
import './Cell.css'
import Checker from "./Checker";
const Cell = (props) => {
    const handleClick = (e) =>  {
        props.cellClick(e, props.i, props.j);
    }

    return (
        <div id={props.i+""+props.j}
             className={"cell "+props.class}
             onClick={handleClick}
             style={{
                 backgroundColor: props.movePossible(props.i, props.j) ? 'skyblue' : ''
             }}>
            {props.checker ? <Checker onClick={props.checkerClick}
                            x={props.j}
                            y={props.i}
                            class={" black"}
                            activeChecker={props.activeChecker}
                            activator={props.activator}
                />
            : <></>}
        </div>
    )
}

export default Cell;