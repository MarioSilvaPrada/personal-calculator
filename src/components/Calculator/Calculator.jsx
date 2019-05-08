import React from 'react';
import './Calculator.css'

const Calculator = (props) => (
    <div className= "calculator">
        {props.children}
    </div>
)

export default Calculator;