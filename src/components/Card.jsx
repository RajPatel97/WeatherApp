import React from 'react';
import styled from 'styled-components';
import { WiDayRainWind } from 'react-icons/wi';
import propTypes from 'prop-types';

import { palette } from '../constants/colors';
import Dallas from '../assets/Dallas.png';
import ToggleSwitch from './ToggleSwitch';
import { breakpoints } from '../constants/mixins';
import WeatherCard from '../ui-components/WeatherCard';
import WeatherStatus from '../ui-components/WeatherStatus';

const Card = ({ currentWeather, forecastData, isMetric, setIsMetric }) => {
  return (
    <Container>
      <div className="weather-header">
        <WeatherStatus
          temp={currentWeather.temp}
          wind={currentWeather.wind}
          weatherCondition={currentWeather.weatherCondition}
          iconCode={currentWeather.iconCode}
          isMetric={isMetric}
        >
          <WiDayRainWind size={70}></WiDayRainWind>
        </WeatherStatus>
        <ToggleSwitch isMetric={isMetric} setIsMetric={setIsMetric} />
      </div>

      <BackgroundImage src={Dallas} />

      <ForecastContainer>
        {forecastData.map((day) => (
          <WeatherCard
            key={day.ts}
            day={new Date(day.ts * 1000).toLocaleDateString('en-US', {
              weekday: 'long',
            })}
            temp={day.temp}
            iconCode={day.weather.code}
          ></WeatherCard>
        ))}
      </ForecastContainer>
    </Container>
  );
};

Card.propTypes = {
  currentWeather: propTypes.object,
  forecastData: propTypes.array,
  isMetric: propTypes.bool,
  setIsMetric: propTypes.func,
};

const Container = styled.div`
  filter: drop-shadow(0 0 0.5rem #707070);
  z-index: 10;
  .weather-header {
    position: absolute;
    color: ${palette.blue};
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (max-width: ${breakpoints.tablet_md}) {
    width: 100%;
  }
`;

const BackgroundImage = styled.img`
  /* making the image fit with the width */
  width: 100%;
  height: auto;
`;

const ForecastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  /* going to eliminate the gap between the image and the forecast cards  */
  z-index: -1;
  position: relative;
  top: -3px;

  @media screen and (max-width: ${breakpoints.tablet_md}) {
    width: 100%;
  }
`;

export default Card;
