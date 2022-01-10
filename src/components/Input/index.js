import React, { memo, useCallback } from 'react';

const Input = ({ label, id, ...rest }) => {
  console.log('Input render');

  return (
    <div className="input-box">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input type="text" className="input-box" id={id} {...rest} />
    </div>
  );
};

export default memo(Input);
