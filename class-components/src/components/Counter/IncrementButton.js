import React, { Component } from 'react'

export default class IncrementButton extends Component {

  handleIncClick = () => {
    this.props.onIncrement();
  }

  render() {
    console.log(this.props);

    return (
      <button
        onClick={this.handleIncClick}
        className="waves-effect waves-light btn green darken-4"
      >
        +
      </button>
    );
  }
}
