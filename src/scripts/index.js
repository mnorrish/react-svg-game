// polyfills
import es6Promise from 'es6-promise';
import 'whatwg-fetch';

// normalize.css
import 'normalize.css';

import main from './main';

es6Promise.polyfill();
main();
