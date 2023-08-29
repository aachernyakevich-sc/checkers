import React from "react";
import './Checker.css'

const Checker = (props) => {
    const handleClick = (e) =>  {
        e.stopPropagation();
        props.activator(true);
        props.onClick(e, props.x, props.y);
    }

    return (
        <button className={"checker" + props.class
            + ((props.activeChecker.y === props.y &&
            props.activeChecker.x === props.x) ? " chosen" : '')
        }
             onClick={handleClick}
             x={props.x}
             y={props.y}
        ></button>
    )
}

export default Checker;