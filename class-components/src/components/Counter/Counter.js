import React, { Component } from 'react';

import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import CounterValue from './CounterValue';
import CounterStep from './CounterStep';

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 0,
      steps: 0,
    };
  }

  handleDecClick = () => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: currentCounter - 1,
      steps: steps + 1,
    });
  };

  handleIncClick = () => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: currentCounter + 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;

    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleDecClick} />
        <CounterValue value={currentCounter} />
        <IncrementButton onIncrement={this.handleIncClick} />
        <CounterStep currentStep={steps} />
      </div>
    );
  }
}
