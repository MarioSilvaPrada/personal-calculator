import React from 'react';
import './NumberButton.css'

const NumberButton = (props) => {

    if (props.num === '<') {
        return <i className="fas fa-backspace" id="backspace" onClick={props.clearLastInput}></i>
    } else {
        return <div onClick={() => props.toRender(props.num)} className="numberButton" id={'num' + props.num} >
            {props.num}
        </div> 
    }

}

export default NumberButton;