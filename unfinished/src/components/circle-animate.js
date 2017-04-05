import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';
import './circle-animate.css'

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
    const { cx, cy } = this.props;
    let node = d3.select(ReactDOM.findDOMNode(this));

    node.transition().duration(750).ease('linear')
      .attr('fill', 'red')
      .attr('cx', cx)
      .attr('cy', cy)
      .each('end', () => {
        this.setState({
          cx: cx,
          cy: cy
        })
        callback()
      })

  }

  componentWillLeave(callback) {

  }

  componentWillReceiveProps(nextProps) {
    const { index, cx, cy, r } = nextProps;
    if (this.props.cx != cx || this.props.cy != cy) {
      let node = d3.select(ReactDOM.findDOMNode(this));

      this.setState({className: 'update'});

      node.transition().duration(750)
        .delay(index * 10)
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('fill', 'red')
        .attr('r', r * 1.5)
      .transition().duration(350)
        .attr('fill', 'black')
        .attr('r', r)
      .each('end', () => {
          this.setState({
            cx: cx,
            cy: cy,
            className: 'enter'
          })
        })
    }
  }

  render() {
    return <circle {...this.state} />
  }
}

export default CircleAnimate;
