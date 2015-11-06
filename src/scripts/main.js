import React from 'react';
import ReactDOM from 'react-dom';

import dude from 'debug-dude';

import Game from './Game';

const {log} = dude('React');

export default (width = 640, height = 480) => {
  ReactDOM.render(
    <Game width={width} height={height} />,
    document.getElementById('root')
  );

  log('rendered root');
}
