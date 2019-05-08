import React from 'react';
import './Symbols.css';

import SymbolButtons from './Components/SymbolButtons/SymbolButtons';

const Symbols = (props) => (
    <div className="symbols">
        <SymbolButtons symbol={'+'} toRender= {props.toRender}/>
        <SymbolButtons symbol={'-'} toRender= {props.toRender}/>
        <SymbolButtons symbol={'/'} toRender= {props.toRender}/>
        <SymbolButtons symbol={'x'} toRender= {props.toRender}/>
        <SymbolButtons symbol={'='} result={props.result}/>
    </div>
)

export default Symbols;