import React from "react";
import './Cell.css'
const Cell = (props) => {
    return (
        <div>
            <div className={"cell "+props.class}></div>
        </div>
    )
}

export default Cell;