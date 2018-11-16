import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
if (process.env.NODE_ENV !== 'production') {
  const eruda = require('eruda')
  eruda.init()
}
console.log(process.env)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
