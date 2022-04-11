import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Card from './components/Card';
import Header from './components/Header';
import { palette } from './constants/colors';
import { CloudOne, CloudTwo } from './icons/Clouds';
import { breakpoints } from './constants/mixins';
import getWeather from './util/api';

function App() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  // const [units] = useState("I");
  const [forecastData, setForecastData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({
    temp: 'Loading...',
    weatherCondition: 'Loading...',
    wind: 'Loading...',
    // iconCode: 200,
  });
  //setting default location  to Dallas TX
  // const [seatchCity] = useState("Dallas");
  // const [searchState] = useState("TX");
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

    getWeather().then((data) => {
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
  }, [window.innerWidth]);

  return (
    <div>
      <Container>
        {!isMobileScreen && <CloudOne />}
        {!isMobileScreen && <CloudTwo />}

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

        <Card currentWeather={currentWeather} forecastData={forecastData} />
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
  /* margin-top: 100px; */
  /* @media screen and (max-width: ${breakpoints.tablet_md}) {
    width: 100vw;
  } */
`;
export default App;
