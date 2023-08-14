import React, {useState} from "react";
import './Checker.css'
const Checker = (props) => {

    const [isActive, setIsActive] = useState(false);
    const handleClick = (e) =>  {
        setIsActive(!isActive);
        props.onClick(props.place);
    }

    return (
        <div className={"checker" + props.class}
             style = {
                {
                 backgroundColor: isActive ? 'salmon' : '',
                 borderColor: isActive ? 'red' : '',
                }
            }
             onClick={handleClick}
             cellId={props.place}
        ></div>
    )
}

export default Checker;