import React from 'react';
import CircleAnimate from './circle-animate';
import ReactTransitionGroup from 'react-addons-transition-group';

const renderCircles = (props) => {
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(coords[0]),
      cy: props.yScale(coords[1]),
      r: 2,
      index: index,
      key: index
    };
    return <CircleAnimate {...circleProps} />;
  }
}

export default (props) => {
  return <g>
    <ReactTransitionGroup component='g'>
      { props.data.map(renderCircles(props)) }
    </ReactTransitionGroup>
  </g>
}
