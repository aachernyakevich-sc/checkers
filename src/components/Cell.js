import React from "react";
import './Cell.css'
import Checker from "./Checker";
const Cell = (props) => {
    const handleClick = (e) =>  {
        props.cellClick(e, props.j,  props.i,);
    }

    return (
        <div id={props.j+""+props.i}
             className={"cell "+props.class}
             onClick={handleClick}
             style={
             {
                 backgroundColor:  props.catchPossible(props.j, props.i) ?
                     'red' :
                     props.movePossible(props.j, props.i) ? 'skyblue' : ''
             }}>
            {props.checker.color !== null ? <Checker onClick={props.checkerClick}
                              x={props.j}
                              y={props.i}
                              class={" "+props.checker.color}
                              activeChecker={props.activeChecker}
                              activator={props.activator} />
                : <></>}
        </div>
    )
}

export default Cell;