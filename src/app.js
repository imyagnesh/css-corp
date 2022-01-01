import React, { useState, useEffect } from 'react';
import Searchinput from './Pages/weather/SearchInput';
import Units from './Pages/weather/Setunits'
import Searchresult from './Pages/weather/SearchResults';
import useDebounce from './Pages/weather/Debounce';
import Context from './context/setting';
import {getData, getUnitsData} from './context/Api';


const App = () =>{
  const [searchTerm, setSearchTerm] = useState('');
  const [unitSearch, setUnitSearch ]= useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const debouncedUnitSearch = useDebounce(unitSearch, 1000);
  
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        getData(debouncedSearchTerm)
        .then(results => {
          setIsSearching(false);
          setResults(results);
        });
      }
      else if (debouncedUnitSearch) {
        setIsSearching(true);
        getUnitsData(debouncedSearchTerm,debouncedUnitSearch)
        .then(results => {
          setIsSearching(false);
          setResults(results);
        });
      }  else {
        setResults([]);
      }
    },
    [debouncedSearchTerm,debouncedUnitSearch]
  );

  return (
    <div className="p-10 w-full">
      <section className="bg-gray-200 p-2">
        <div className="container mx-auto">
          <div className="bg-gray-100">
            <h2 className="font-medium text-xl pl-5 pt-10 border-b-2 border-red-500">{Context.Weatertitle}</h2>
            <div class="mt-4 ml-4 mr-5">
              <div className="flex">
                  <Searchinput setSearchTerm={setSearchTerm}></Searchinput>
                  <Units setUnitSearch={setUnitSearch}></Units>
              </div>
            </div>
            {isSearching && 
              <div className="flex justify-center">
                <img  src="./asstes/loader.gif" alt="loader" width="50" height="50" />
              </div>
            }
            <Searchresult result={results}></Searchresult>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;
