import React from 'react';
import ProgressBar from './ProgressBar';
import wrapper from './ProgressBarHoc';

// Wrap the 'dumb' progress bar in the HOC.
const WrappedProgressBar = wrapper(ProgressBar);

class ProgressBarContainer extends React.Component {
  state = {
    percentage: 0
  };

  handleIncrease = () => {
    this.setState(state => {
      if (state.percentage < 80) return { percentage: state.percentage + 20 }
      else return { percentage: 100 }
    });
  };

  handleDecrease = () => {
      this.setState(state => {
          if (state.percentage < 20) return { percentage: 0 }
          else return { percentage: state.percentage - 20 }
      })
  }

  render() {
    const { percentage } = this.state;
    const colorsProp = {
      50: "red",
      90: "orange",
      100: "green"
    };
    return (
      <div style={{ padding: 40 }}>
        <div style={{ marginBottom: 20 }}>
            <button onClick={this.handleIncrease} style={{ marginRight: 10 }}>Increase</button>
            <button onClick={this.handleDecrease} style={{ marginRight: 10 }}>Decrease</button>
            <span>Percentage: {percentage}</span>
        </div>
        <WrappedProgressBar percentage={percentage} colors={colorsProp} />
      </div>
    );
  }
}

export default ProgressBarContainer;
