import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { WeatherUser } from './context/weather';

const setUnit = () => {
  return (
    <WeatherUser>
      {({ changeUnit, units }) => (
        <div className="w-1/3 bg-[#F1F1F1] p-4 uppercase text-sm rounded-xl">
          <h3>Units</h3>
          <div className="flex items-center">
            <select className="w-full bg-transparent font-bold outline-none border-none" id="unit-filter" onChange={(event) => (changeUnit(event))}>
              {units.map(({ key, title }) => (
                <option value={key} key={key}>{title}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </WeatherUser>
  );
};

setUnit.propTypes = {
  changeUnit: PropTypes.func,
  units: PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default memo(setUnit);
