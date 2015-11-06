import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({

  getDefaultProps() {
    return {
      height: 250,
      width: 400,
    };
  },

  handleClick() {
    console.log(arguments);
  },

  render() {
    return (
      <g fill="gray" stroke="none">
        <rect width={this.props.width} height={this.props.height} x={this.props.playerPosition.x} y={this.props.playerPosition.y} />
      </g>
    );
  }

})
