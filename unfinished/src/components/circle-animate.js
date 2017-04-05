import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

class CircleAnimate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cx: this.props.cx,
      cy: this.props.cy,
      r: this.props.r
    }
  }

  componentWillEnter(callback) {

  }

  componentWillLeave(callback) {

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cx != nextProps.cx || this.props.cy != nextProps.cy) {
      //start update transition
    }
  }

  render() {
    return <circle {...this.props} />
  }
}

export default CircleAnimate;
