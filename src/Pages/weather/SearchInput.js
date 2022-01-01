import React from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/setting';

const Searchinput = ({setSearchTerm}) =>{
    return (
        <div className="w-10/12 h-20 bg-white border rounded">
            <span className="block text-black font-bold font-mono pt-1 pl-3 uppercase">{Context.location}</span>
            <input 
            className="w-full pl-5 focus:outline-none mt-2" 
            type="text"
            onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    )
}
Searchinput.propTypes = {
    setSearchTerm: PropTypes.func.isRequired,
}

export default Searchinput;