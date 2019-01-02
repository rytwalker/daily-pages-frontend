import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const initalState = {
  start: Date.now() + 60 * 1000 * 1,
  end: Date.now()
};
initalState.delta = Math.floor((initalState.start - initalState.end) / 1000);

class Timer extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      ...initalState,
      seconds: initalState.delta % 60,
      minutes: initalState.delta / 60
    });
  }

  counter = () => {
    this.setState(prevState => ({ delta: prevState.delta - 1 }));
    let second = Math.floor(this.state.delta);
    if (second >= 0) {
      this.setState({
        seconds: Math.floor(second % 60),
        minutes: Math.floor(second / 60)
      });
    } else {
      return;
    }
  };

  handleTimerStart = () =>
    this.setState({
      seconds: Math.floor(this.state.delta % 60),
      minutes: Math.floor(this.state.delta / 60),
      count: setInterval(this.counter, 1000)
    });
  handleTimerPause = () => clearInterval(this.state.count);
  handleStopTimer = () => {
    clearInterval(this.state.count);
    this.setState({
      seconds: Math.floor(initalState.delta % 60),
      minutes: Math.floor(initalState.delta / 60),
      delta: initalState.delta
    });
  };
  render() {
    const { minutes, seconds } = this.state;
    return (
      <StyledTimer>
        <button onClick={this.handleTimerStart}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button onClick={this.handleTimerPause}>
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button onClick={this.handleStopTimer}>
          <FontAwesomeIcon icon={faStop} />
        </button>
        <p>
          {minutes < 10 ? `0${minutes}` : `${minutes}`}:{' '}
          {seconds < 10 ? `0${seconds}` : `${seconds}`}
        </p>
      </StyledTimer>
    );
  }
}

const StyledTimer = styled.div`
  display: flex;
  width: 100%;

  button {
    cursor: pointer;
    background: transparent;
    border: transparent;
    margin-right: 10px;
    &:active {
      outline: none;
    }
  }
`;

export default Timer;
