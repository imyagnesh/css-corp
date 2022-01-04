import React, { Component } from 'react';
import Input from './Input';
import SetUnit from './SetUnits';
import SearchResults from './SearchResults';
import WeatherReport from './WeatherReport';
import { OPENWEATHER_API_KEY, DEFAULT_CITY_WEATHER, OPENWEATHER_CELCIUS_VALUE } from '../../../.env';
import _, { debounce } from 'lodash';

var temperature, minTemp, maxTemp, windSpeed, windDirection, pressure, feelsLike, country, humidity, description, icon;

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: DEFAULT_CITY_WEATHER,
            fetchedCities: [],
            units: OPENWEATHER_CELCIUS_VALUE,
            hasErrorInWeatherFetch: false
        }
    }

    componentDidMount() {
        this.getWeather(window.event);
    }

    inputRef = React.createRef();
    selectRef = React.createRef();

    searchLocations = (e) => {
        e.preventDefault();
        const cityKeyword = this.inputRef.current.value;

        fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5&offset=0&namePrefix=${cityKeyword}&minPopulation=1000039&types=city`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    fetchedCities: [...json.data]
                })
            })
            .catch(err => {
                console.error(err);
            });
    }

    getCity = (e) => {
        return e == null ? this.state.city : e.target.nodeName === "BUTTON" ? e.target.innerText : this.state.city;
    }

    getWeather = async (e) => {
        var city = this.getCity(e);
        const units = this.selectRef.current.value;
        var dataWeather = null;
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=${units}`)
            .then((res) => res.json())
            .then((json) => {
                dataWeather = json;
                console.log(dataWeather);
                if (dataWeather != null) {
                    temperature = dataWeather.main.temp;
                    minTemp = dataWeather.main.temp_min;
                    maxTemp = dataWeather.main.temp_max;
                    windSpeed = dataWeather.wind.speed;
                    windDirection = dataWeather.wind.deg;
                    pressure = dataWeather.main.pressure;
                    feelsLike = dataWeather.main.feels_like;
                    country = dataWeather.sys.country;
                    humidity = dataWeather.main.humidity;
                    description = dataWeather.weather[0].description;
                    icon = "https://openweathermap.org/img/wn/" + dataWeather.weather[0].icon + "@2x.png";

                    this.setState({
                        city: dataWeather.name,
                        units: this.selectRef.current.value,
                        hasErrorInWeatherFetch: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    city: dataWeather.name,
                    hasErrorInWeatherFetch: true
                });
            });
    }

    searchLocations = debounce(this.searchLocations, 500);

    render() {
        return (
            <div className="w-7/12 m-auto container p-2 bg-slate-100">
                <div className="border-solid border-b-2 border-red-800 text-2xl tracking-wide font-bold site-heading my-3">
                    <h1 className="">WeatherWatch</h1>
                </div>
                <div className="p-2">
                    <div className="grid grid-cols-2">
                        <Input ref={this.inputRef} searchLocations={this.searchLocations} />
                        <SetUnit ref={this.selectRef} getWeather={this.getWeather} />
                    </div>
                    <SearchResults cities={this.state.fetchedCities} getWeather={this.getWeather} />
                    <WeatherReport
                        temperature={temperature}
                        minTemp={minTemp}
                        maxTemp={maxTemp}
                        windSpeed={windSpeed}
                        windDirection={windDirection}
                        pressure={pressure}
                        feelsLike={feelsLike}
                        city={this.state.city}
                        country={country}
                        humidity={humidity}
                        description={description}
                        hasErrorInWeatherFetch={this.state.hasErrorInWeatherFetch}
                        units={this.state.units}
                        icon={icon}
                    />
                </div>
            </div>
        );
    }
}

export default App2;