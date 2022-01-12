import React, { memo } from 'react';

const OptionChips = ({ cities, onSelectCity }) => {
  console.log('option chips');

  return (
    <>
      {cities.map((x) => (
        <div
          role="button"
          className="search-option"
          key={x.id}
          onClick={() => onSelectCity(x.id)}
        >
          {x.name}
        </div>
      ))}
    </>
  );
};

export default memo(OptionChips);
