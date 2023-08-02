import React from "react";
import './Cell.css'
const Cell = (props) => {
    return (
        <button className="cell odd" onClick={props.onClick}>{props.class}</button>
    )
}

export default Cell;