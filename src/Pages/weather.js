import React, { Component, createRef } from 'react';

export default class Weather extends Component {
  state = {
    weather: [
      {
        city: 'AHM',
        temp: 30,
      },
      {
        city: 'MDU',
        temp: 25,
      },
    ],
    news: [],
  };

  inputRef = createRef();

  findWeather = (event) => {
    event.preventDefault();
    const cityName = this.inputRef.current.value;
    this.setState(
      ({ weather }) => {
        const y = (weather.filter(x => x.city === cityName));
        return { news: y.length > 0 ? y : 'no matches' };
      },
      () => {
        this.inputRef.current.value = '';
      },
    );
  };

  render() {
    let displayNews;
    const { news } = this.state;
    if (news === 'no matches') {
      displayNews = news;
    } else if (news.length > 0) {
      displayNews = `${news[0].city} city's temp is ${news[0].temp}`;
    }
    return (
      <div className="container">
        <h1>Weather Board</h1>
        <form onSubmit={this.findWeather}>
          <input type="text" ref={this.inputRef} />
          <button type="submit">Show Weather</button>
        </form>
        {displayNews}
      </div>
    );
  }
}
