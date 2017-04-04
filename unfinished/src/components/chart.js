// Following along here:
// https://reactjsnews.com/playing-with-react-and-d3

import React, { Component } from 'react';
import ScatterPlot from './scatter-plot';

const styles = {
  width: 500,
  height: 300,
  padding: 30,
}

const numDataPoints = 50;
const randomNum = () => Math.floor(Math.random() * 1000);
const randomDataSet = () => {
    return Array.apply(null, { length: numDataPoints })
                .map(() => [randomNum(), randomNum()])
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { data: randomDataSet() };
  }

  randomizeData() {
    this.setState( { data: randomDataSet() });
  }

  render() {
    return (
      <div>
        <h1>ScatterPlotting With React and D3</h1>
        <ScatterPlot {...this.state} {...styles} />
        <div className='controls'>
          <button className='btn randomize' onClick={() => this.randomizeData()}>
            Randomize data
          </button>
        </div>
      </div>
    )
  }
}

export default Chart;
