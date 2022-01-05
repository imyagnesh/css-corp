import React, {
  useMemo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import loadable from '@loadable/component';
import debounce from 'lodash.debounce';
import Input from './input';
import WeatherReport from './weatherReport';
import WeatherUnits from './setUnits';
import useHttpStatus from '../../hooks/useHttpStatus';

const WeatherSearchResults = loadable(
  () => import(/* webpackChunkName: "WeatherReport" */ './searchResults'),
  { fallback: <h1>Loading...Please Wait!</h1> },
);

const App = () => {
  const [defaultTempUnit, setDefaultTempUnit] = useState('C');
  const [searchResult, setSearchResult] = useState([]);
  const [weatherReport, setweatherReport] = useState({});
  const [location, setLocation] = useState('');
  const [cityName, setCityName] = useState('1277333');
  const inputRef = useRef();

  const { httpStatus, loadingStatus, successStatus, errorStatus } =
    useHttpStatus();

  const getLocation = async () => {
    const type = 'GET_LOCATION';
    try {
      loadingStatus({ type });
      const locationValue = inputRef.current.value;
      if (!locationValue) {
        throw new Error('Enter city name for weather report!');
      }
      const result = await fetch(
        `https://api.weatherserver.com/weather/cities/${locationValue}`,
      );
      const json = await result.json();
      const searchResults = json.results.filter((item) =>
        item.name.toLowerCase().startsWith(locationValue.toLowerCase()),
      );
      setSearchResult(searchResults);
      setLocation(locationValue);
      successStatus({ type });
    } catch (error) {
      errorStatus({ type, payload: error });
    }
  };

  const relevantCitySearch = debounce(() => {
    getLocation();
  }, 500);

  const getWeather = useCallback(
    async (city = cityName) => {
      const type = 'GET_WEATHER';
      try {
        loadingStatus({ type });
        const result = await fetch(
          `https://api.weatherserver.com/weather/current/${city}/${defaultTempUnit}`,
        );
        const json = await result.json();
        setweatherReport(json);
        setCityName(city);
        successStatus({ type });
      } catch (error) {
        errorStatus({ type, payload: error });
      }
    },
    [cityName, defaultTempUnit, errorStatus, loadingStatus, successStatus],
  );
  const toggleUnits = (event) => {
    const inputVal = event.target.value;
    setDefaultTempUnit(inputVal);
  };

  useEffect(() => {
    getWeather();
  }, [getWeather, defaultTempUnit]);

  const searchStatus = useMemo(
    () => httpStatus.find((x) => x.type === 'GET_LOCATION'),
    [httpStatus],
  );

  const reportStatus = useMemo(
    () => httpStatus.find((x) => x.type === 'GET_WEATHER'),
    [httpStatus],
  );

  return (
    <div className="w3/4 justify-center bg-gray-300 flex">
      <div className="py-5 px-5 flex flex-col bg-slate-50 mx-10">
        <div className="mx-1 my-1 justify-center divide-y divide-dashed">
          <h1 className="font-bold text-xl border-b border-gray-800">
            WeatherWatch
          </h1>
        </div>

        <div className="flex">
          <Input
            ref={inputRef}
            setLocation={setLocation}
            relevantCitySearch={relevantCitySearch}
          />
          <WeatherUnits toggleUnits={toggleUnits} />
        </div>
        <WeatherSearchResults
          location={location}
          searchResult={searchResult}
          searchStatus={searchStatus}
          getWeather={getWeather}
        />
        <div className="flex px-5 my-3 flex-col bg-white">
          <div>
            {reportStatus?.status === 'REQUEST' && (
              <div className="font-bold text-red-600">Loading...</div>
            )}
            {reportStatus?.status === 'FAIL' && (
              <div className="font-bold text-red-600">
                {reportStatus.payload.message}
              </div>
            )}
          </div>
          {weatherReport && (
            <WeatherReport
              weatherReport={weatherReport}
              httpStatus={reportStatus}
              defaultTempUnit={defaultTempUnit}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
