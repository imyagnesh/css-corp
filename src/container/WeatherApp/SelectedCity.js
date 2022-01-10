import React, { memo } from 'react';

const SelectedCity = ({ data }) => {
  console.log('selected city render');
  return (
    <div className="weather-report">
      <p className="big">{data.location}</p>
      <p className="conditions">{data.conditions}</p>

      <img src={data.icon} alt="image" />

      <div className="temperature">
        <h2>Current Temperature</h2>
        <div />
      </div>
      <div className="wind">
        <h2>Current Temperature</h2>
        <div />
      </div>
      <div className="pressure">
        <h2>Current Temperature</h2>
        <div />
      </div>
    </div>
  );
};

export default memo(SelectedCity);
