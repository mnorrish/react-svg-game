// polyfills
import es6Promise from 'es6-promise';
import 'whatwg-fetch';

// styles
import 'normalize.css';
import '../styles/main.sass';

import main from './main';

es6Promise.polyfill();
main();
