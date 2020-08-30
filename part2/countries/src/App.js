import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryDetail = ({ country }) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;

    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`;

    axios.get(url).then((response) => {
      setWeatherData(response.data);
    });
  }, []);

  return (
    <>
      <h2>{country.name}</h2>
      <div>
        Capital: {country.capital} <br />
        Population: {country.population}
      </div>
      <div>
        <h3>Languages:</h3>
        <ul>
          {country.languages.map((lang) => (
            <li key={lang.iso639_1}>{lang.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={country.flag} alt="" width="20%" />
      </div>
      <div>
        <h3>Weather in {country.capital}</h3>
        {weatherData.current ? (
          <>
            <strong>Temperature:</strong> {weatherData.current.temperature}{" "}
            celcius ({weatherData.current.weather_descriptions[0]})
            <br />
            <img src={weatherData.current.weather_icons[0]} />
            <br />
            <strong>Wind:</strong> {weatherData.current.wind_speed} mph /
            direction {weatherData.current.wind_dir}
          </>
        ) : (
          <span>None</span>
        )}
      </div>
    </>
  );
};

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countryNameFilter, setCountryNameFilter] = useState("");

  const filtered = allCountries.filter((country) =>
    country.name.toLowerCase().includes(countryNameFilter.toLowerCase())
  );

  useEffect(() => {
    // axios.get("https://restcountries.eu/rest/v2/all").then(
    axios.get("http://localhost:3001/countries").then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  const handleCountryChange = (event) => {
    setCountryNameFilter(event.target.value);
  };

  return (
    <div>
      <h2>Data for Countries</h2>
      find countries:
      <input value={countryNameFilter} onChange={handleCountryChange} />
      <div>
        {filtered.length === 1 ? (
          <CountryDetail country={filtered[0]} />
        ) : filtered.length >= 10 ? (
          <span>Too many matches, specify another filter</span>
        ) : (
          filtered.map((country) => (
            <div key={country.name}>
              <span>{country.name}</span>
              <button onClick={() => setCountryNameFilter(country.name)}>
                show
              </button>
              <br />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
