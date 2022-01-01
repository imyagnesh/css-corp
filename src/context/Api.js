
const apiKey = '333458e05b25c5e69a7c22d64b7bc47f';
const base ='http://api.openweathermap.org/data/2.5/weather';

export const getData = async (search) => {
    try { 
        const queryString =`q=${search}&units=imperial&apikey=${apiKey}`;
        const res = await fetch(`${base}?${queryString}`, { method: 'GET'});
        const json = await res.json();
        return json;
    }
    catch(error) {
        console.error(error);
        return [];
    };
  }
  export const getUnitsData = async (search,units) => {
    try { 
        const queryString =`q=${search}&units=${units}&apikey=${apiKey}`;
        const res = await fetch(`${base}?${queryString}`, { method: 'GET'});
        const json = await res.json();
        return json;
    }
    catch(error) {
        console.error(error);
        return [];
    };
  }

  
