import React, { Component, createRef } from 'react';
import './weatherStyles.css';

export default class Weather extends Component {

    state = {
        weatherDeatils: [],
        weatherTemp: '',
    };

inputRef = createRef();

async componentDidMount() {
    try {
      const res = await fetch(' http://localhost:3000/weather-deatils');
      const json = await res.json();
      this.setState({ weatherDeatils: json });
    } catch (error) {
      this.setState({ error });
    }
  }

checkWeather = (event) => {
    event.preventDefault();
    const { weatherDeatils } = this.state;
    const weatherLoaction = this.inputRef.current.value;
    this.setState(({ weatherTemp }) => {
        return { weatherTemp: weatherDeatils.find((x) => x.city === weatherLoaction) };
    });
};

 render(){
     const { weatherDeatils, weatherTemp } = this.state;

     return(
         <div className="h-screen flex flex-col bg-gray-100">
            <div className="w-1/2 my-10 mx-auto h-64 bg-white shadow-md">
            <h1 className="text-center p-3 bg-green-500 text-white text-2xl font-bold">Weather Check</h1>
            <form className="flex justify-center my-10" onSubmit={this.checkWeather}>
                <input type="text" placeholder="Search here" className="w-5/12 p-1 text-lg border border-solid border-gary-100 rounded-none focus:outline-none focus:border-blue-500" ref={this.inputRef} />
                <button type="submit" className="btn-primary w-2/12 rounded-none">Check</button>   
            </form>
            <div className="text-center my-10 text-lg">
                    {
                        weatherTemp ? <div key={weatherTemp.id}>{weatherTemp.city} weather is {weatherTemp.temp}</div> : <div class="error"> No city found</div>
                    }
            </div>
            </div>
         </div>
     )
 }
}
