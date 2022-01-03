import React, { createContext, PureComponent } from 'react';
import WeatherReports from '../WeatherReports';

export const WeatherContext = createContext();

export const WeatherConsumer = WeatherContext.Consumer;

export class WeatherProvider extends PureComponent {
  state = {
    data: {},
    city: 'Bengaluru',
    units: 'C',
  };

  async componentDidMount() {
    console.log('weatherContext render');
    this.weatherForecast();
  }

  weatherForecast = async (event) => {
    event.preventDefault();
    try {
      let api = 'http://localhost:3000/weather-info';
      let res = await fetch(api, {
        method: 'GET',
      });
      const json = await res.json();
      if (json != null) {
        this.setState({
          data: json,
        });
      }
    } catch (error) {
      // Error
    }
  };

  render() {
    const { children } = this.props;
    const { data, city, units } = this.state;

    return (
      <WeatherContext.Provider value={{ data, city, units }}>
        {children}
      </WeatherContext.Provider>
    );
  }
}
