
import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  handleInput = (value) => {
    this.setState({ input: this.state.input + value });
  };

  handleClear = () => {
    this.setState({ input: '' });
  };

  handleCalculate = () => {
    try {
      const result = eval(this.state.input);
      this.setState({ input: result });
    } catch (error) {
      this.setState({ input: 'Error' });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="input">{this.state.input}</div>
        <div className="buttons">
          <button onClick={() => this.handleInput('7')}>7</button>
          <button onClick={() => this.handleInput('8')}>8</button>
          <button onClick={() => this.handleInput('9')}>9</button>
          <button onClick={() => this.handleInput('+')}>+</button>
          <button onClick={() => this.handleInput('4')}>4</button>
          <button onClick={() => this.handleInput('5')}>5</button>
          <button onClick={() => this.handleInput('6')}>6</button>
          <button onClick={() => this.handleInput('-')}>-</button>
          <button onClick={() => this.handleInput('1')}>1</button>
          <button onClick={() => this.handleInput('2')}>2</button>
          <button onClick={() => this.handleInput('3')}>3</button>
          <button onClick={() => this.handleInput('*')}>*</button>
          <button onClick={() => this.handleInput('0')}>0</button>
          <button onClick={() => this.handleClear()}>C</button>
          <button onClick={() => this.handleCalculate()}>=</button>
          <button onClick={() => this.handleInput('/')}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
