import React from "react";
import './Cell.css'
import Checker from "./Checker";
const Cell = (props) => {
    return (
            <div id={props.value} className={"cell "+props.class}>
                {props.checker ? <Checker onClick={props.onClick}
                           place={props.value}
                           class={" black"}/>
                : <></>}
            </div>
    )
}

export default Cell;