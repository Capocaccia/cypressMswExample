import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const { worker } = require('./mocks/browser')

//Comment out the worker.start() line below to use real data.
// Procure your free API key here: https://openweathermap.org/price
// Replace API_KEY in app.js with your API key
worker.start()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
