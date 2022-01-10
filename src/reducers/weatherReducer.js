export const weatherAppInitialState = {
  location: '',
  unit: 'C',
  cities: [],
  selectedCity: null,
};

export const weatherReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_LOCATION':
      return { ...state, location: payload };

    case 'CHANGE_UNIT':
      return { ...state, unit: payload };

    case 'LOAD_CITIES_SUCCESS':
      return { ...state, cities: payload };

    case 'LOAD_SELECTED_CITY_SUCCESS':
      return { ...state, selectedCity: payload, cities: [] };

    default:
      break;
  }
};
