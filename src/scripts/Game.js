import React from 'react';
import ReactDOM from 'react-dom';

import Map from './Map';

import keyboard from './keyboard';
import GameLoop from './GameLoop';
import dude from 'debug-dude';

const {log} = dude('Game');

export default React.createClass({

  getDefaultProps() {
    return {
      height: 250,
      width: 400
    };
  },

  getInitialState() {
    return {
      playerPosition: {
        x: this.props.height / 2,
        y: this.props.width / 2
      }
    };
  },

  componentDidMount() {
    this.gameLoop = GameLoop.start(50, () => {
      let xOffset = 0;
      let yOffset = 0;

      if (keyboard.hasKeyDown('j')) {
        xOffset -= 5;
      }
      if (keyboard.hasKeyDown('l')) {
        xOffset += 5;
      }
      if (keyboard.hasKeyDown('k')) {
        yOffset -= 5;
      }
      if (keyboard.hasKeyDown('i')) {
        yOffset += 5;
      }

      this.setState({
        playerPosition: {
          x: this.state.playerPosition.x + xOffset,
          y: this.state.playerPosition.y + yOffset
        }
      });
    });
  },

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Map width={this.props.width} height={this.props.height} playerPosition={this.state.playerPosition} />
      </svg>
    );
  }

})
