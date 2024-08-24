import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerValue: 0,
      intervalId: null,
    };
  }

  startTimer = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {
        this.setState((prevState) => ({
          timerValue: prevState.timerValue + 1,
        }));
      }, 1000);
      this.setState({ intervalId });
    }
  };

  stopTimer = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
    }
  };

  componentWillUnmount() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  render() {
    return (
      <div>
      <h1>Welcome to the Timer App</h1>
        <h3>Timer: {this.state.timerValue}</h3>
        <button onClick={this.startTimer}>Start Timer</button>
        <button onClick={this.stopTimer}>Stop Timer</button>
      </div>
    );
  }
}

export default Timer;
