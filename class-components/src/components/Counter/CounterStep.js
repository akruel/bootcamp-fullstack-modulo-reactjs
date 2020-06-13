import React, { Component } from 'react';

export default class CounterStep extends Component {
  render() {
    return <span>({this.props.currentStep})</span>;
  }
}
