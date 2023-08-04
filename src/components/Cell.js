import React from "react";
import './Cell.css'
import Checker from "./Checker";
const Cell = (props) => {
    return (
            <div className={"cell "+props.class}>{props.value === "0 1"
                ? <Checker class={" black"} onClick={() => props.onClick()}/>
                : <></>}</div>
    )
}

export default Cell;