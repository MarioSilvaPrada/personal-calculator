import React from 'react';
import './SymbolButtons.css'

const SymbolButtons = ({ symbol, result, toRender }) => {

    const symbolToRender = () => {
        switch (symbol) {
            case '+':
                return <i className="fas fa-plus" onClick = {() => toRender('+')}></i>

            case '-':
                return <i className="fas fa-minus" onClick = {() => toRender('-')}></i>

            case 'x':
                return <i className="fas fa-times" onClick = {() => toRender('*')}></i>

            case '/':
                return <i className="fas fa-divide" onClick = {() => toRender('/')}></i>

            case '=':
                return <i className="fas fa-equals" onClick= {result}></i>

            default:
                return '';
        }
    }

    return (
        symbolToRender(symbol)
    )
}

export default SymbolButtons;