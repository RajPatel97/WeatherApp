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
  //setting default location  to Dallas TX
  //different states for searching and setting location incase there are errors when searching or getting data
  const [searchCity, setSearchCity] = useState('Dallas');
  const [searchState, setSearchState] = useState('TX');
  const [displayCity, setDisplayCity] = useState('Dallas');
  const [displayState, setDisplayState] = useState('TX');
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isMetric, setIsMetric] = useState(true);
  const [forecastData, setForecastData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({
    temp: 'Loading...',
    weatherCondition: 'Loading...',
    wind: 'Loading...',
  });

  /**
   * @description - This function is used to get the screen size and set the state.
   * used to determine if the screen is a mobile screen or not.
   */
  const getScreenSize = () => {
    if (window.innerWidth < 700) {
      setIsMobileScreen(true);
    } else {
      setIsMobileScreen(false);
    }
  };

  useEffect(() => {
    getScreenSize();
    window.addEventListener('resize', getScreenSize); //listen for screen size changes

    //grabbing the data from the api and settings the state with appropriate data
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
    //listening to screensize changes, if toggleswitch is toggled, and if there is a new input if the searchbar
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
