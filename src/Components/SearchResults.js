import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SearchResults = (props) => {
  const { cities } = props;
  const cityData = cities?.map((item) => (
    <button
      type="button"
      className="btn-city btn-primary"
      key={item.id}
      name={item}
      onClick={() => props.searchCities(item)}
    >
      {item}
    </button>
  ));
  return (
    <>
      {cities.length > 0 && (
        <div className="bg-white m-3 rounded">
          <div id="city-button" className="my-3 mx-5 bg-white p-1">
            {cityData}
          </div>
        </div>
      )}
    </>
  );
};

SearchResults.propTypes = {
  searchCities: PropTypes.func.isRequired,
};

export default memo(SearchResults);
