import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { WeatherUser } from './context/weather';

const SearchResult = () => {
  return (
    <WeatherUser>
      {({ cities, loadReportData }) => (
        <div className="z-10 origin-top-right top-[70px] absolute w-full p-4 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div className="py-1">
            {cities.map(({ name, country, lat }) => (
              <button
                type="button"
                className="btn-result"
                key={lat}
                onClick={() => {
                  loadReportData(`${name},${country}`);
                }}
              >
                {name}
                ,
                {country}
              </button>
            ))}
          </div>
        </div>
      )}
    </WeatherUser>
  );
};

SearchResult.PropTypes = {
  cities: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    lat: PropTypes.string,
  }),
  loadReportData: PropTypes.func,
};

export default memo(SearchResult);
