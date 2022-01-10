import React, { memo } from 'react';

const OptionChips = ({ cities, onSelectCity }) => {
  console.log('option chips');

  return (
    <div className="search-results">
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
    </div>
  );
};

export default memo(OptionChips);
