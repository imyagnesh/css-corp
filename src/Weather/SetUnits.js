import React, { forwardRef, memo } from "react";
import PropTypes from 'prop-types';
import { OPEN_CELCIUS_VALUE, OPEN_FAHRENHEIT_VALUE } from './constants';

const SetUnit = forwardRef((prop, ref) => {
    return (
        <form className="bg-white p-1">
            <h2 className="font-bold">Units</h2>
            <select className="h-12" ref={ref} onChange={prop.getWeather}>
                <option value={OPEN_CELCIUS_VALUE}>Celcius</option>
                <option value={OPEN_FAHRENHEIT_VALUE}>Fahrenheit</option>
            </select>
        </form>
    );
});

SetUnit.propTypes = {
    getWeather: PropTypes.func.isRequired,
};

export default memo(SetUnit);