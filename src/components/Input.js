import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef((props, ref) => (
  <div className="pt-6 w-3/4 inline-block">
    <div className="border border-3">
      <div>
        <div className="bg-white p-1 inline-block">
          <div>
            <label className="w-full pl-3 font-bold uppercase">Location:</label>
          </div>
          <input
            type="text"
            className="pb-4"
            onChange={(event) => props.getWeatherResults(event)}
            ref={ref}
          />
        </div>
      </div>
    </div>
  </div>
));

Input.propTypes = {
  getWeatherResults: PropTypes.func.isRequired,
};

export default memo(Input);
