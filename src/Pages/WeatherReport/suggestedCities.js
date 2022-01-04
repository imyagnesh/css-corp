/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable linebreak-style */
import React, { memo } from 'react';

const SuggestedCities = (props) => {
  // const citiesi = this.props.cities;
  const { cities, getCityReport } = props;
  // console.log(props);
  return (
    <div className="suggested-city-list">
      {cities.map((item) => (
        <div className="suggested-city" key={item.id}>
          <label htmlFor={item.id} className="">
            <input
              name="selectCity"
              className="hidden"
              type="radio"
              id={item.id}
              value="{item.name}"
              onChange={() => getCityReport(item.name)}
            />
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SuggestedCities;
