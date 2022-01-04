import React, { useState } from 'react';
import WeatherReport from './weatherReport';

const App = () => {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: '',
  });
  const apiKey = '096b454aef6c032c11d4537e22332e17';
  // const apiUrl = ``;

  const getCityData = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setForm({ ...form, city: value });
  };
  const getWeather = async (e) => {
    e.preventDefault();
    // var city = e != null ? e.target.innerText : this.state.city;
    // const city = this.getCity(e);
    // const units = this.selectRef.current.value;
    let dataWeather = null;
    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${form.city}&units=imperial&appid=${apiKey}`,
    )
      .then((res) => res.json())
      .then((json) => {
        dataWeather = json;
        if (dataWeather != null) {
          console.log(dataWeather);
          setWeather({ data: dataWeather });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="p-2">
      <div className="grid grid-cols-2">
        <form>
          <input
            type="text"
            placeholder="city"
            name="city"
            onChange={(e) => getCityData(e)}
          />
          <button className="getweather" onClick={(e) => getWeather(e)}>
            Submit
          </button>
        </form>
      </div>
      {weather.data !== undefined ? (
        <WeatherReport data={weather.data} />
      ) : null}
    </div>
  );
};

export default App;
