import debounce from 'lodash.debounce';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import {
  weatherAppInitialState,
  weatherReducer,
} from '../reducers/weatherReducer';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, weatherAppInitialState);
  const { unit } = state;

  const loadCities = useCallback(async (city) => {
    try {
      console.log('loadCities');
      dispatch({ type: 'LOAD_CITIES_REQUEST' });
      const res = await fetch(
        `https://api.weatherserver.com/weather/cities/${city}`,
      );
      const json = await res.json();
      dispatch({ type: 'LOAD_CITIES_SUCCESS', payload: json.results });
    } catch (err) {
      dispatch({ type: 'LOAD_CITIES_FAIL', payload: err });
    }
  }, []);

  const debounceLoadData = useMemo(
    () => debounce(loadCities, 500),
    [loadCities],
  );

  useEffect(
    () => () => {
      debounceLoadData.cancel();
    },
    [debounceLoadData],
  );

  const onChangeLocation = useCallback(
    (event) => {
      const city = event.target.value;
      dispatch({ type: 'CHANGE_LOCATION', payload: city });
      debounceLoadData(city);
    },
    [debounceLoadData],
  );

  const onSelectCity = useCallback(
    async (cityId) => {
      try {
        dispatch({ type: 'LOAD_SELECTED_CITY_REQUEST' });
        const res = await fetch(
          `https://api.weatherserver.com/weather/current/${cityId}/${unit}`,
        );
        // throw new Error('Something went wrong');
        const json = await res.json();

        dispatch({ type: 'LOAD_SELECTED_CITY_SUCCESS', payload: json });
      } catch (err) {
        dispatch({ type: 'LOAD_SELECTED_CITY_FAIL', payload: err });
      }
    },
    [unit],
  );

  useEffect(() => {
    onSelectCity('1277333');
  }, [onSelectCity]);

  const units = useMemo(
    () => [
      {
        value: 'C',
        text: 'Celsius',
      },
      {
        value: 'F',
        text: 'Fahrenheit',
      },
    ],
    [],
  );

  const onChangeUnits = useCallback((event) => {
    dispatch({ type: 'CHANGE_UNIT', payload: event.target.value });
  }, []);

  const value = useMemo(
    () => ({
      data: state,
      onChangeLocation,
      onSelectCity,
      onChangeUnits,
      units,
    }),
    [state, onChangeLocation, onSelectCity, onChangeUnits, units],
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
