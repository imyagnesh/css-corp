import React, { memo } from "react";
import PropTypes from 'prop-types';

const SearchResults = (props) => {
    const cities = props.cities;
    const citiesList = cities.map((city) => <button type="button" className="btn-primary bg-red-400" key={city.id} name={city.name} onClick={props.getWeather}>{city.name}</button>);
    return (
        <>
        { cities.length > 0 &&
            <div className="my-3 bg-white p-1 space-x-1 bg-slate-200 ">
                { citiesList }
            </div>
        }
        </>
    );
};

SearchResults.propTypes = {
    cities: PropTypes.array,
};

export default memo(SearchResults); 