import './App.css';
import { useEffect, useState } from 'react';

function KtoF(tempKevlin) {
  return ((tempKevlin - 273.15) * 9) / 5 + 32;
}


function App() {
  const [weatherResult, setWeather] = useState(null)
  const [city, setCity] = useState('Memphis')
  const API_KEY ='PUT_YOUR_API_KEY_HERE'

  // the API key below is a free public API key.  
  // Procure your own key here: https://openweathermap.org/price
  // to use real data, comment out worker.start() in index.js
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((r) => r.json())
      .then((result) => setWeather(result));
  }, [city])

  const handleChange = (event) => {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div>
        <h1>
          If you want to run this app against live data, comment out the following line in index.js. Then procure an API key for free from <a href="https://openweathermap.org/price">https://openweathermap.org/price</a> and replace API_KEY in App.js.
        </h1>
        <p>
          <code>
            worker.start()
          </code>
        </p>
      </div>
      <div>
        <label>
          Pick A City:
          <select value={city} onChange={handleChange}>
            <option value="Memphis">Memphis</option>
            <option value="Atlanta">Atlanta</option>
            <option value="Denver">Denver</option>
            <option value="Amsterdam">Amsterdam</option>
          </select>
        </label>
      </div>
      <div>
        <h2>{city}</h2>
        <p data-testId="temperatureWrapper">
          Temperature:{" "}
          {weatherResult && KtoF(weatherResult?.main?.temp).toFixed(0)}
          &#8457;
        </p>
        <p data-testId="weatherDescription">
          Description: {weatherResult && weatherResult?.weather[0]?.description}
        </p>
      </div>
    </div>
  );
}

export default App;
