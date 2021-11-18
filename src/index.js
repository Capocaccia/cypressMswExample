import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const { worker } = require('./mocks/browser')

//Comment out the worker.start() line below to use real data.
// Procure your free API key here: https://openweathermap.org/price
// Replace API_KEY in app.js with your API key

//using multiple worker.start calls resuls in multiple [MSW] Mocking Enabled logs in the dev console
worker.start()
worker.start()
worker.start()
worker.start()
worker.start()



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
