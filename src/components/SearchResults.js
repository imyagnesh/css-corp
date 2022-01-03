import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SearchResults = (props) => {
  const cities = props.cities;
  const cityData = cities?.map((item) => (
    <button
      type="button"
      className="btn-primary mr-0.5 bg-gradient-to-r from-pink-500 to-yellow-500"
      key={item.id}
      name={item}
      onClick={() => props.searchCities(item)}
    >
      {item}
    </button>
  ));
  return (
    <>
      {cities.length > 0 && <div className="my-3 bg-white p-1">{cityData}</div>}
    </>
  );
};

SearchResults.propTypes = {
  cities: PropTypes.array,
  searchCities: PropTypes.func.isRequired,
};

export default memo(SearchResults);
