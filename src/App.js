import React, { Component } from 'react';
import './App.css';

import math from 'mathjs';

import Calculator from './components/Calculator/Calculator';
import Visor from './components/Visor/Visor';
import ClearButton from './components/ClearButton/ClearButton'
import NumPad from './components/NumPad/NumPad';
import Symbols from './components/Symbols/Symbols';

class App extends Component {

  state = {
    inputToRender: '',
    result: ''
  }

  methodToRender = (input) => {

    const { inputToRender,result } = this.state;

    const lastResult = result;

    const userInput = lastResult + inputToRender;

    const lastUserInput = userInput.slice(-1);

    const symbols = '+-/*';


    if (symbols.includes(lastUserInput) && symbols.includes(input)) {
      this.setState({ inputToRender: userInput.slice(0, -1) + input })
      this.setState({result: ''})
    }
    else {
      this.setState({ inputToRender: userInput + input });
      this.setState({result: ''})
    }
  }

  findResult = () => {
    const res = math.round(math.eval(this.state.inputToRender), 8);
    this.setState({ result: res });
    this.setState({inputToRender: ''})
  }

  clearState = () => {
    this.setState({ inputToRender: '', result: '' })
  }

  clearLastInput = () => {
    const value = this.state.inputToRender;
    const valueToRender = value.slice(0, value.length - 1);
    this.setState({ inputToRender: valueToRender });
  }


  render() {
    return (
      <Calculator>
        <Visor userInput={this.state.inputToRender} valueResult={this.state.result} />
        <div className="user-buttons">
          <div className="colum1">
            <ClearButton clear={this.clearState} />
            <NumPad toRender={this.methodToRender} clearLastInput={this.clearLastInput} />
          </div>
          <div className="colum2">
            <Symbols result={this.findResult} toRender={this.methodToRender} />
          </div>
        </div>

      </Calculator>
    );
  }
}

export default App;
