import React, { memo, useRef, useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import WeatherReport from './weatherReport';
import WeatherSearchResult from './WeatherSearchResult';
import WeatherForm from './WeatherForm';
import './weather.css';

const App = () => {
  const [defaultCity, setCity] = useState('bangalore');
  const [weatherReport, setweatherReport] = useState({});
  const [locationText, setlocation] = useState('');
  const [searchResult, setsearchResponse] = useState([]);
  const [Unit, setUnit] = useState('Celsius');
  const inputRef = useRef();
  const apiKey = '096b454aef6c032c11d4537e22332e17';

  const getCityData = async () => {
    const cityName = inputRef.current.value;
    try {
      const result = await fetch(
        `http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5&offset=0&namePrefix=${cityName}&minPopulation=1000039`,
      ).then((res) => res.json());
      const cityList = result.data.map((list) => {
        if (list.type == 'CITY') {
          return list.name;
        }
      });
      const searchResults = cityList.filter((item) =>
        item.toLowerCase().startsWith(cityName.toLowerCase()),
      );
      setsearchResponse(searchResults);
      setlocation(cityName);
    } catch (error) {
      console.log(error);
    }
  };

  const searchLocations = debounce((text) => {
    getCityData();
  }, 600);

  const getWeather = async (cityName = defaultCity) => {
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${Unit}&appid=${apiKey}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setweatherReport(json);
        setCity(cityName);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const UpdateTemp = (val) => {
    setUnit(val);
  };
  // useEffect(() => {
  //     findLocation();
  // }, [locationText]);

  useEffect(() => {
    getWeather();
  }, [Unit]);
  return (
    <div className="container">
      <div className="weather-app">
        <h1>WeatherWatch</h1>
        <WeatherForm
          ref={inputRef}
          setlocation={setlocation}
          searchLocations={searchLocations}
          Unit={setUnit}
        />
        <WeatherSearchResult
          locationText={locationText}
          searchResult={searchResult}
          getWeather={getWeather}
        />

        {weatherReport.name && (
          <WeatherReport weatherReport={weatherReport} Unit={Unit} />
        )}
      </div>
    </div>
  );
};

export default App;
