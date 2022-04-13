const api_key = 'c8353c6a3e534249b29a5a37f440811f';

/**
 * @description this function is used to get the weather data from the APIs.
 * fetches the current weather and forecast data for the location entered.
 *
 * @param {string} city - the city name
 * @param {string} state - the state name
 * @param {bool} isMetric - whether the user wants metric or imperial units
 * @returns {object} - an object with the current and 5 day forecast data.
 */
const getWeather = (state, city, isMetric) => {
  const units = isMetric ? 'M' : 'I';
  const currentWeatherAPI = fetch(
    `https://api.weatherbit.io/v2.0/current?city=${city},${state}&units=${units}&key=${api_key}`
  );
  const forecastWeatherAPI = fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${state}&units=${units}&key=${api_key}`
  );

  return Promise.all([currentWeatherAPI, forecastWeatherAPI])
    .then((values) => Promise.all(values.map((value) => value.json())))
    .then((data) => {
      const [currentWeatherData, forecastWeatherData] = data;

      if (
        currentWeatherData.error ||
        forecastWeatherData.error ||
        !currentWeatherData.data[0] ||
        forecastWeatherData.data.length < 7
      ) {
        alert(
          'There was an error retrieving the weather data. Please try again.'
        );
        throw new Error(currentWeatherData.error);
      }

      const currentWeather = {
        city: currentWeatherData.data[0].city_name,
        state: currentWeatherData.data[0].state_code,
        country: currentWeatherData.data[0].country_code,
        temp: Math.round(currentWeatherData.data[0].temp),
        icon: currentWeatherData.data[0].weather.code,
        description: currentWeatherData.data[0].weather.description,
        wind_spd: currentWeatherData.data[0].wind_spd,
      };

      return {
        currentData: currentWeather,
        forecastData: forecastWeatherData.data.slice(1, 6),
      };
    });
};

export default getWeather;
