const api_key = '036dc318eaf64824ab25928d372ec697';

const getWeather = (searchState, searchCity, isMetric) => {
  let units = isMetric ? 'M' : 'I';

  let currentWeatherAPI = fetch(
    `https://api.weatherbit.io/v2.0/current?city=${searchCity},${searchState}&units=${units}&key=${api_key}`
  );
  let forecastWeatherAPI = fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchCity},${searchState}&units=${units}&key=${api_key}`
  );

  return Promise.all([currentWeatherAPI, forecastWeatherAPI])
    .then((values) => Promise.all(values.map((value) => value.json())))
    .then((data) => {
      const [currentData, forecastData] = data;

      if (
        currentData.error ||
        forecastData.error ||
        !currentData.data[0] ||
        forecastData.data.length < 7
      ) {
        throw new Error(currentData.error);
      }

      const currentWeather = {
        city: currentData.data[0].city_name,
        state: currentData.data[0].state_code,
        country: currentData.data[0].country_code,
        temp: Math.round(currentData.data[0].temp),
        icon: currentData.data[0].weather.code,
        description: currentData.data[0].weather.description,
        wind_spd: currentData.data[0].wind_spd, // convert m/s to mph
      };

      return {
        currentData: currentWeather,
        forecastData: forecastData.data.slice(1, 6),
      };
    });
};

export default getWeather;
