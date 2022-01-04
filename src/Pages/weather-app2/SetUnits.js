import React, { forwardRef, memo } from "react";
import PropTypes from 'prop-types';
import { OPENWEATHER_CELCIUS_VALUE, OPENWEATHER_FAHRENHEIT_VALUE } from '../../../.env';

const SetUnit = forwardRef((props, ref) => {
    return (
        <form className="bg-white p-1">
            <h2 className="font-bold">Units</h2>
            <select className="h-12" ref={ref} onChange={props.getWeather}>
                <option value={OPENWEATHER_CELCIUS_VALUE}>Celcius</option>
                <option value={OPENWEATHER_FAHRENHEIT_VALUE}>Fahrenheit</option>
            </select>
        </form>
    );
});

SetUnit.propTypes = {
    getWeather: PropTypes.func.isRequired,
};

export default memo(SetUnit);