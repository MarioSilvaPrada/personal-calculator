import React from 'react';
import './NumPad.css'

import NumberButton from './components/NumberButton/NumberButton'



const NumPad = (props) => (
    <div className="numpad">
        <NumberButton num={9} toRender={props.toRender}/>
        <NumberButton num={8} toRender={props.toRender}/>
        <NumberButton num={7} toRender={props.toRender}/>
        <NumberButton num={6} toRender={props.toRender}/>
        <NumberButton num={5} toRender={props.toRender}/>
        <NumberButton num={4} toRender={props.toRender}/>
        <NumberButton num={3} toRender={props.toRender}/>
        <NumberButton num={2} toRender={props.toRender}/>
        <NumberButton num={1} toRender={props.toRender}/>
        <NumberButton num={'.'} toRender={props.toRender}/>
        <NumberButton num={0} toRender={props.toRender}/>
        <NumberButton num={'<'} clearLastInput={props.clearLastInput}/>
    </div>
)

export default NumPad;