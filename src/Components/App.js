import React, { PureComponent, createRef, lazy, Suspense } from 'react';
import _ from 'lodash';

const Input = lazy(() => import('./Input'));
const SearchResults = lazy(() => import('./SearchResults'));
const SetUnits = lazy(() => import('./SetUnits'));
const WeatherReports = lazy(() => import('./WeatherReports'));

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      description: '',
      currentTemp: '',
      maxTemp: '',
      minTemp: '',
      windDct: '',
      units: 'F',
      changeUnit: 'farenheit',
      windSpeed: '',
      pressure: '',
      humidity: '',
      feelsLike: '',
      cities: [],
      name: [],
      citySearch: false,
      cityNames: [
        'Chennai',
        'Chandigar',
        'Chicago',
        'Madurai',
        'Mumbai',
        'Bangalore',
        'Baroda',
        'Kashmir',
      ],
    };
    this.inputRef = createRef();
  }

  // componentDidMount Lifecycle method to fetch default Bangalore Data
  componentDidMount() {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=333458e05b25c5e69a7c22d64b7bc47f&units=imperial',
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          city: json.name,
          description: json.weather[0].description,
          currentTemp: json.main.temp,
          maxTemp: json.main.temp_max,
          minTemp: json.main.temp_min,
          pressure: json.main.pressure,
          humidity: json.main.humidity,
          windSpeed: json.wind.speed,
          windDct: json.wind.deg,
          feelsLike: json.main.feels_like,
        });
      });
  }

  // componentDidUpdate Lifecycle menthod to hide button
  componentDidUpdate(previousState) {
    const { citySearch } = this.state;
    if (document.getElementById('city-button') !== null) {
      if (previousState.citySearch !== citySearch) {
        document.getElementById('city-button').style.display = 'inline-block';
      }
      if (citySearch === true) {
        document.getElementById('city-button').style.display = 'none';
      }
    }
  }

  // Function to filter the matcher cities
  getWeatherResults = (event) => {
    const currentCity = event.target.value;
    this.setState(
      ({ cityNames }) => {
        const location = cityNames.filter((item) =>
          item.toLowerCase().startsWith(currentCity.toLowerCase()),
        );
        return {
          name: location,
        };
      },
      () => {
        this.inputRef.current.value = '';
        this.setState({ citySearch: false });
      },
    );
  };

  getWeather = _.debounce(this.getWeatherResults, 500);

  // Function to change tempetatures(C to F and F to C)
  changeUnits = (event) => {
    const { value } = event.target;
    console.log(value);
    this.setState({ changeUnit: value });
    if (value === 'celcius') {
      console.log(value);
      this.setState(({ maxTemp, minTemp, currentTemp, feelsLike }) => {
        const max = Math.round(((maxTemp - 32) * 5) / 9);
        const min = Math.round(((minTemp - 32) * 5) / 9);
        const current = Math.round(((currentTemp - 32) * 5) / 9);
        const feels = Math.round(((feelsLike - 32) * 5) / 9);
        return {
          maxTemp: max,
          minTemp: min,
          currentTemp: current,
          feelsLike: feels,
          units: 'C',
        };
      });
    } else {
      this.setState(({ maxTemp, minTemp, currentTemp, feelsLike }) => {
        const max = Math.round(maxTemp * (9 / 5) + 32);
        const min = Math.round(minTemp * (9 / 5) + 32);
        const current = Math.round(currentTemp * (9 / 5) + 32);
        const feels = Math.round(feelsLike * (9 / 5) + 32);
        return {
          maxTemp: max,
          minTemp: min,
          currentTemp: current,
          feelsLike: feels,
          units: 'F',
        };
      });
    }
  };

  // This function is to display the weather report of selected City
  searchCities = (item) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?appid=333458e05b25c5e69a7c22d64b7bc47f&units=imperial&q=${item}`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          cities: [json],
          city: json.name,
          description: json.weather[0].description,
          currentTemp: json.main.temp,
          maxTemp: json.main.temp_max,
          minTemp: json.main.temp_min,
          pressure: json.main.pressure,
          humidity: json.main.humidity,
          windSpeed: json.wind.speed,
          windDct: json.wind.deg,
          feelsLike: json.main.feels_like,
          citySearch: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Render method
  render() {
    const {
      city,
      description,
      currentTemp,
      units,
      windSpeed,
      maxTemp,
      minTemp,
      windDct,
      pressure,
      humidity,
      cities,
      name,
      changeUnit,
      feelsLike,
    } = this.state;

    return (
      <div className="shadow-2xl border-8 border-solid ml-96 mr-96 mt-10">
        <div className="mx-2 my-2 bg-gray-50">
          <div className="flex flex-col px-2">
            <h1 className="border-b-2 border-red-500 w-full text-lg font-bold mt-4">
              WeatherWatch
            </h1>
          </div>
          <Suspense fallback={<h1>weather loading...</h1>}>
            <Input ref={this.inputRef} getWeatherResults={this.getWeather} />
          </Suspense>

          <Suspense fallback={<h1>units loading...</h1>}>
            <SetUnits changeUnits={this.changeUnits} currentUnit={changeUnit} />
          </Suspense>

          <Suspense fallback={<h1>Cities Loading...</h1>}>
            <SearchResults cities={name} searchCities={this.searchCities} />
          </Suspense>

          <Suspense fallback={<h1>Result Loading...</h1>}>
            <WeatherReports
              city={city}
              description={description}
              units={units}
              currentTemp={currentTemp}
              windSpeed={windSpeed}
              maxTemp={maxTemp}
              minTemp={minTemp}
              windDct={windDct}
              pressure={pressure}
              humidity={humidity}
              cities={cities}
              feelsLike={feelsLike}
            />
          </Suspense>
        </div>
      </div>
    );
  }
}
