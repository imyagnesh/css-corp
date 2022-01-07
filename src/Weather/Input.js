import React, { forwardRef, memo } from "react";
import PropType from 'prop-types';

const Input = forwardRef((props, ref) => {
    return (
        <div className="bg-white p-1">
            <form>
                <h2 className="font-bold">Location</h2>
                <input type="text" className="h-12 w-80" ref={ref} name="city" onChange={props.searchLocations} />
            </form>
        </div>
    );
});

Input.PropType = {
    searchLocations: PropType.func.isRequired,
};

export default memo(Input); 