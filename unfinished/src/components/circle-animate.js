import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

class CircleAnimate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cx: this.props.cx,
      cy: this.props.cy,
      r: this.props.r,
      className: 'enter'
    }
  }



  componentWillEnter(callback) {
    const transition = d3.transition()
                     .duration(750)
                     .ease(d3.easeCubicInOut);

    let node = d3.select(ReactDOM.findDOMNode(this));

    node.transition(transition)
      .attr('fill', 'red')
      .attr('cx', this.props.cx)
      .attr('cy', this.props.cy)
      .on('end', () => {
        this.setState({
          cx: this.props.cx,
          cy: this.props.cy
        })
        callback()
      })

  }

  componentWillLeave(callback) {

  }

  componentWillReceiveProps(nextProps) {
    const transition = d3.transition()
                     .duration(750)
                    //  .ease(d3.easeCubicInOut);

    if (this.props.cx != nextProps.cx || this.props.cy != nextProps.cy) {
      let node = d3.select(ReactDOM.findDOMNode(this));

      node.on('end', () => {
        this.setState({
          cx: this.props.cx,
          cy: this.props.cy
        })
      })
      .transition(transition)
        .attr('cx', this.props.cx)
        .attr('cy', this.props.cy)

    }
  }

  render() {
    return <circle {...this.state} />
  }
}

export default CircleAnimate;
