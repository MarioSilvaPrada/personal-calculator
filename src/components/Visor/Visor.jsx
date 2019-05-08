import React from 'react';
import './Visor.css'

const Visor = (props) => (
    <div className= "visor">
        <div className="user-input">
            {props.userInput}
        </div>
        <div className="result">
            {props.valueResult}
        </div>
    </div>
)

export default Visor;