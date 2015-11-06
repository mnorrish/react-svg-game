import React from 'react';
import ReactDOM from 'react-dom';

import dude from 'debug-dude';
const {log} = dude('React');

export default () => {
  ReactDOM.render(
    <h1>Hello, World!</h1>,
    document.getElementById('root')
  );

  log('rendered root');
}
