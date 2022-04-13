import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Dallas from '../assets/Dallas.png';
import ToggleSwitch from './ToggleSwitch';
import { breakpoints } from '../constants/mixins';
import WeatherCard from './WeatherCard';
import WeatherStatus from './WeatherStatus';

/**
 * @description - This component is the main container for the weather app.
 * all weather data is passed in as props and distributed to the child components.
 */
const Card = ({ currentWeather, forecastData, isMetric, setIsMetric }) => {
  const { temp, iconCode, weatherCondition, wind } = currentWeather;
  return (
    <Container>
      {!isNaN(temp) && (
        <WeatherStatus
          temp={temp}
          wind={wind}
          weatherCondition={weatherCondition}
          iconCode={iconCode}
          isMetric={isMetric}
        />
      )}
      <ToggleSwitch isMetric={isMetric} setIsMetric={setIsMetric} />
      <Image src={Dallas} alt="Dallas skyline" />
      <Forecast>
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
      </Forecast>
    </Container>
  );
};

Card.propTypes = {
  currentWeather: propTypes.object.isRequired,
  forecastData: propTypes.array.isRequired,
  isMetric: propTypes.bool.isRequired,
  setIsMetric: propTypes.func.isRequired,
};

const Forecast = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* eliminate the gap between the image and the forecast cards  */
  position: relative;
  top: -3px;
`;

const Container = styled.div`
  position: relative;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: ${breakpoints.tablet_md}) {
    width: 100%;
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
