import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({ relevantCitySearch }, ref) => (
  <div className="bg-white flex-grow mr-1 px-5 py-5 order-1">
    <form>
      <div>
        <h1 className="font-bold uppercase">Location</h1>
        <input
          className="w-full"
          type="text"
          onChange={(event) => relevantCitySearch(event)}
          ref={ref}
        />
      </div>
    </form>
  </div>
));

Input.propTypes = {
  relevantCitySearch: PropTypes.func.isRequired,
};
export default memo(Input);
