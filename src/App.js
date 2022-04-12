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
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isMetric, setIsMetric] = useState(true);
  const [forecastData, setForecastData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({
    temp: 'Loading...',
    weatherCondition: 'Loading...',
    wind: 'Loading...',
  });
  //setting default location  to Dallas TX
  const [searchCity, setSearchCity] = useState('Dallas');
  const [searchState, setSearchState] = useState('TX');
  //different incase there are errors when searching or getting data
  const [displayCity, setDisplayCity] = useState('Dallas');
  const [displayState, setDisplayState] = useState('TX');

  const getScreenSize = () => {
    if (window.innerWidth < 700) {
      setIsMobileScreen(true);
    } else {
      setIsMobileScreen(false);
    }
  };

  useEffect(() => {
    getScreenSize();
    window.addEventListener('resize', getScreenSize);

    getWeather(searchState, searchCity, isMetric).then((data) => {
      setDisplayCity(data.currentData.city);
      setDisplayState(data.currentData.state);

      setCurrentWeather({
        temp: data.currentData.temp,
        weatherCondition: data.currentData.description,
        wind: data.currentData.wind_spd,
        iconCode: data.currentData.icon,
      });

      setForecastData(data.forecastData);
    });
  }, [isMobileScreen, isMetric, searchCity, searchState]);

  return (
    <div>
      <Container>
        {!isMobileScreen && <CloudOne />}
        {!isMobileScreen && <CloudTwo />}
        <SearchBar
          setSearchState={setSearchState}
          setSearchCity={setSearchCity}
        />
        <Header
          city={displayCity}
          state={displayState}
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
    </div>
  );
}
const Container = styled.div`
  color: ${palette.white};
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export default App;
