import React, { memo } from 'react';

const SelectedCity = ({
  data: {
    conditions,
    feels_like,
    humidity,
    icon,
    location,
    pressure,
    temp,
    temp_max,
    temp_min,
    wind_direction,
    wind_speed,
  },
}) => {
  console.log('selected city render');
  return (
    <div className="weather-report">
      <h2 className="big">{location}</h2>
      <p className="conditions">{conditions}</p>

      <img src={icon} alt="image" />

      <div className="temperature">
        <div>
          <p>Current Temperature</p>
          <h2>{temp}</h2>
        </div>
        <div>
          <p>Maximum Temperature</p>
          <h2>{temp_max}</h2>
        </div>
        <div>
          <p>Minimum Temperature</p>
          <h2>{temp_min}</h2>
        </div>
      </div>
      <div className="wind">
        <div>
          <p>Wind Speed</p>
          <h2>{wind_speed}</h2>
        </div>
        <div>
          <p>Wind Direction</p>
          <h2>{wind_direction}</h2>
        </div>
      </div>
      <div className="pressure">
        <div>
          <p>Pressure</p>
          <h2>{pressure}</h2>
        </div>
        <div>
          <p>Humidity</p>
          <h2>{humidity}</h2>
        </div>
      </div>
    </div>
  );
};

export default memo(SelectedCity);
