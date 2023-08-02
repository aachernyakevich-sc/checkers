import React from "react";
import './Cell.css'
const Cell = (props) => {
    return (
        <button className={"cell"+props.class} onClick={props.onClick}></button>
    )
}

export default Cell;