import React, { createRef, PureComponent } from 'react';
import searchForm from './searchForm';
import WeatherResult from './weatherResult';
import './styles.css';

export default class WeatherWatchApp extends PureComponent { 

    render() {
        return (
            <div className="bg-gray-200 p-3 h-full font-bold text-xs">
                <div className="w-2/3 mx-auto p-5 bg-[#F8F8F8] rounded-md">
                    <h2 className="w-full text-xl border-b-2 border-b-red-500 mt-2">WeatherWatch</h2>
                    <div className="mt-3 flex flex-col mb-2 relative">
                        <WeatherResult />
                    </div>
                </div>
            </div>
        )
    }
}