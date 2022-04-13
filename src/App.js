import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Card from './components/Card';
import Header from './components/Header';
import { palette } from './constants/colors';
import { CloudOne, CloudTwo } from './icons/Clouds';
import getWeather from './util/api';
import SearchBar from './components/SearchBar';

function App() {
  // setting default location  to Dallas TX
  const [city, setCity] = useState('Dallas');
  const [state, setState] = useState('TX');
  const [isMetric, setIsMetric] = useState(true);
  // used to store the data from the api call for the forecast weather of the given location
  const [forecastData, setForecastData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({
    temp: 'Loading...',
    weatherCondition: 'Loading...',
    wind: 'Loading...',
  });

  useEffect(() => {
    // grabbing the data from the api and settings the state with appropriate data
    getWeather(state, city, isMetric).then((data) => {
      setCity(data.currentData.city);
      setState(data.currentData.state);

      setCurrentWeather({
        temp: data.currentData.temp,
        weatherCondition: data.currentData.description,
        wind: data.currentData.wind_spd,
        iconCode: data.currentData.icon,
      });

      setForecastData(data.forecastData);
    });
    // listening to toggleswitch and if there is a new input if the searchbar
  }, [isMetric, state, city]);

  return (
    <Container>
      <CloudOne />
      <CloudTwo />
      <SearchBar setSearchState={setState} setSearchCity={setCity} />
      <Header
        city={city}
        state={state}
        date={new Date().toLocaleString('en-us', {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      />

      <Card
        currentWeather={currentWeather}
        forecastData={forecastData}
        isMetric={isMetric}
        setIsMetric={setIsMetric}
      />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  color: ${palette.white};
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;
export default App;
