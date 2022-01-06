/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable linebreak-style */
import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

// import { ThemeContext } from '../../context/themeContext';

const SearchCity = forwardRef(({ getSuggestedCities, changeUnit, selectedUnit }, ref) =>
  // console.log('searchCity');
  // console.log(selectedUnit);
  (
    <>
      <form className="search-form" noValidate>
        <div className="search-location">
          <label className="label-name">Location</label>
          <br />
          <input type="text" placeholder="Location" ref={ref} className="search-input" onKeyUp={getSuggestedCities} />
        </div>
        <div className="unit-dropdown">
          <label className="label-name">Units</label>
          <br />
          <select name="units" value={selectedUnit} onChange={changeUnit} className="select-unit">           
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
      </form>

    </>
  ),
);

SearchCity.propTypes = {
  getSuggestedCities: PropTypes.func.isRequired,
  changeUnit: PropTypes.func.isRequired,
};

export default memo(SearchCity);
