import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Dallas from '../assets/Dallas.png';
import ToggleSwitch from './ToggleSwitch';
import { breakpoints } from '../constants/mixins';
import WeatherCard from '../ui-components/WeatherCard';
import WeatherStatus from '../ui-components/WeatherStatus';

/**
 * @description - This component is the main container for the weather app.
 * all weather data is passed in as props and distributed to the child components.
 */
const Card = ({ currentWeather, forecastData, isMetric, setIsMetric }) => {
  return (
    <Container>
      <WeatherStatus
        temp={currentWeather.temp}
        wind={currentWeather.wind}
        weatherCondition={currentWeather.weatherCondition}
        iconCode={currentWeather.iconCode}
        isMetric={isMetric}
      />
      <ToggleSwitch isMetric={isMetric} setIsMetric={setIsMetric} />

      <Image src={Dallas} />

      <div className="forecast-container">
        {forecastData.map((day) => (
          <WeatherCard
            key={day.ts}
            day={new Date(day.ts * 1000).toLocaleDateString('en-US', {
              weekday: 'short',
            })}
            temp={day.temp}
            iconCode={day.weather.code}
          />
        ))}
      </div>
    </Container>
  );
};

Card.propTypes = {
  currentWeather: propTypes.object.isRequired,
  forecastData: propTypes.array.isRequired,
  isMetric: propTypes.bool.isRequired,
  setIsMetric: propTypes.func.isRequired,
};

const Container = styled.div`
  /* position: relative; */
  filter: drop-shadow(0 0 0.5rem #707070);
  z-index: 10;

  .forecast-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* eliminate the gap between the image and the forecast cards  */
    z-index: -1;
    position: relative;
    top: -3px;
  }

  @media screen and (max-width: ${breakpoints.tablet_md}) {
    width: 100%;
    position: relative;
    .forecast-container {
      width: 100%;
    }
  }
`;

const Image = styled.img`
  /* making the image fit with the width */
  width: 100%;
  height: auto;
`;

export default Card;
