import React, { Component, createRef } from 'react';
import './todoStyle.css';

export default class Weather extends Component {
    state = {
        cityDetails: [
            { id: 1, city: 'Chennai', temp: '27' },
            { id: 2, city: 'Bangalore', temp: '9' },
            { id: 3, city: 'Vellore', temp: '41' },
        ],
        resultValue: '',
    };

    inputRef = createRef();

    checkWeather = (event) => {
        event.preventDefault();
        const inputLocation = this.inputRef.current.value;
        this.setState(({ cityDetails }) => {
            const locationExist = cityDetails.find((x) => x.city === inputLocation);
            return {
                resultValue: locationExist ? `${locationExist.city} city's temp is ${locationExist.temp}` : `City data is not exist`,
            };
        });
    };

    render() {
        const { resultValue } = this.state;
        return (
            <div>
                <form onSubmit={this.checkWeather}>
                    <input type="text" ref={this.inputRef} />
                    <button type="submit">Know your wheather</button>
                </form>
                <div>
                    {
                        resultValue
                    }
                </div>
            </div>
        );
    }
}