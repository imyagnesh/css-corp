import React from 'react';
import axios from 'axios';
import City from './searchlocations';
import Weather from './Weather';


class App extends React.Component {

    state = { weatherResult: null, searchtemperature: null }

    searchlocations = async (searchInputValue, searchtemperature) => {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&units=imperial&appid=20083fe902da86695ef7fc8cd4debaab`)
        this.setState({ weatherResult: response.data })
    }

    render() {
        return (
            <div className="weather_container bg-gray-100 p-3">
                <div className="bg-gray-50 p-4 rounded w-2/4 m-auto">
                    <h5 className="border-red-400 pt-2 font-semibold border-b-2">WeatherWatch</h5>
                    <City onSearchSubmit={this.searchlocations} />
                    {this.state.weatherResult ? <Weather weatherResult={this.state.weatherResult} searchtemperature={this.state.searchtemperature} /> : <div></div>}
                </div>
            </div>
        )
    }

}

export default App; 
