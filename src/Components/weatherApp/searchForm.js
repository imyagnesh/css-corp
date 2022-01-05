import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { WeatherUser } from './context/weather';

const SearchForm = forwardRef((props, ref) => {
  return (
    <WeatherUser>
      {({ fetchLocationInfo, loadCityStatus }) => (
        <div className="w-2/3 bg-[#F1F1F1] p-4 mr-[10px] uppercase text-sm rounded-xl">
          <h3>Locations</h3>
          <div className="mt-1">
            <input type="text" id="searchInput" className="form-input" ref={ref} onChange={(event) => fetchLocationInfo(event)} />
            {loadCityStatus?.status === 'REQUEST'
                            && <div className="absolute top-[0.5rem] right-0 text-xs capitalize">loading...</div>}
          </div>
        </div>
      )}
    </WeatherUser>
  );
});

SearchForm.PropTypes = {
  fetchLocationInfo: PropTypes.func,
  loadCityStatus: PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.objectOf(Error),
    status: PropTypes.oneOf(['REQUEST', 'FAIL']),
  }),
};

export default memo(SearchForm);
