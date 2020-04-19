import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() => {
    try {
        const { data } = await axios.get(url);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return modifiedData;

    } catch (error) {
        return error;

    }
}

// export const fetchDailyData = async() => {
//     try {

//         const { data } = await axios.get(`${url}/daily`);

//         const modifiedData = data.map(({ confirmed, deaths, reportDate: date })=>({ 
//             confirmed: confirmed.total, deaths: deaths.total, date 
//         }));

//         return modifiedData;
        
//     } catch (error) {
//         return error;
        
//     }
// }

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
};

export const fethCountries = async() => {

    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }

}