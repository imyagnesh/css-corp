import React from "react";
import Context from '../../context/setting';

const Units = ({setUnitSearch})=>{
    
return (
    <div className="w-2/12  h-20 bg-white border rounded">
        <span className="block text-black font-bold font-mono pt-1 pl-3">{Context.units}</span>
        <div className="relative">
            <div className="absolute inset-y-0 right-0 "> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <select onClick={e => setUnitSearch(e.target.value)} className="form-select appearance-none
                    w-full 
                    pl-3 
                    focus:outline-none
                    mt-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    m-0" 
                    aria-label="emples">
                    <option></option>
                    <option value="imperial">imperial</option>
                    <option value="metric">metric</option>
                </select>
            </div>
        </div>
    </div>
)
}
export default Units;