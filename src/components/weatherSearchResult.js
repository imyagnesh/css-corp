import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WeatherSearchResult = ({ searchResult, getWeather }) => (
  <div className="flex">
    {searchResult.length > 0 ? (
      searchResult.map((item, index) => (
        <button
          className="btn-primary my-1 mx-1 from-red-800 to-purple-300 bg-gradient-to-r rounded-full"
          key={index}
          type="button"
          onClick={() => getWeather(item)}
        >
          {item}
        </button>
      ))
    ) : (
      <div className="font-semibold text-red-300 ml-5">Enter New City</div>
    )}
    )
  </div>
);
WeatherSearchResult.propTypes = {
  searchResult: PropTypes.array.isRequired,
  getWeather: PropTypes.func.isRequired,
};
export default memo(WeatherSearchResult);
