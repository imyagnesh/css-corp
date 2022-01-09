import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

const WeatherForm = forwardRef(({ searchLocations, UpdateTemp }, ref) => (
  <div className="bg-white">
    <form>
      <div className=" flex flex-nowrap w-full ">
        <div className="mr-1 border px-5 py-5">
          <h1 className="uppercase font-medium">Location</h1>
          <input
            className=" border"
            type="text"
            onChange={(e) => searchLocations(e.target.value)}
            ref={ref}
          />
        </div>
        <div className=" border px-5 py-5">
          <h1 className="uppercase font-medium">units</h1>
          <select
            onChange={(e) => UpdateTemp(e.target.value)}
            className=" border"
          >
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
          </select>
        </div>
      </div>
    </form>
  </div>
));
WeatherForm.propTypes = {
  searchLocations: PropTypes.func.isRequired,
  UpdateTemp: PropTypes.func.isRequired,
};
WeatherForm.defaultProps = {
  Unit: 'Celsius',
};
export default memo(WeatherForm);
