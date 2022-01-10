import React, { memo } from 'react';

const Select = ({ id, label, options, ...props }) => {
  console.log('Select render');
  return (
    <div className="set-units">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <select id={id} {...props}>
        {options.map((x) => (
          <option key={x.value} value={x.value}>
            {x.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Select);
