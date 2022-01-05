import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WeatherSearchResults = ({
  searchResult,
  httpStatus,
  getWeather,
  location,
}) => (
  <div className="flex">
    {httpStatus?.status === 'REQUEST' && (
      <div className="font-bold text-red-400">Loading...</div>
    )}
    {httpStatus?.status === 'FAIL' && (
      <div className="pl-2 font-bold text-red-500">
        {httpStatus.payload.message}
      </div>
    )}
    {searchResult.length > 0 && !httpStatus?.status ? (
      searchResult.map((item) => (
        <button
          type="button"
          className="btn-primary bg-gradient-to-r from-pink-600 to-fuchsia-700 my-1 mx-1 rounded-full"
          key={item.id}
          onClick={() => getWeather(item.id)}
        >
          {item.name}
        </button>
      ))
    ) : location !== '' && !httpStatus?.status ? (
      <div className="font-bold text-red-600 ml-5">OOPS, City not found!</div>
    ) : (
      ''
    )}
  </div>
);
WeatherSearchResults.propTypes = {
  searchResult: PropTypes.array.isRequired,
  httpStatus: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOf(['REQUEST', 'FAIL']),
      type: PropTypes.oneOf(['GET_LOCATION']),
      payload: PropTypes.objectOf(Error),
    }),
  ),
  getWeather: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};
WeatherSearchResults.defaultProps = {
  httpStatus: undefined,
};
export default memo(WeatherSearchResults);
