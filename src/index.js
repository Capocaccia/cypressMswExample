import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const { worker } = require('./mocks/browser')

//uncomment the line below to use Mock Service Worker in the application without Cypress.
// worker.start()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
