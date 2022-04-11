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

const Card = ({ currentWeather, forecastData }) => {
  return (
    <Container>
      <div className="weather-header">
        <WeatherStatus
          temp={currentWeather.temp}
          wind={currentWeather.wind}
          weatherCondition={currentWeather.weatherCondition}
          iconCode={currentWeather.iconCode}
        >
          <WiDayRainWind size={70}></WiDayRainWind>
        </WeatherStatus>
        <ToggleSwitch />
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
};

const Container = styled.div`
  filter: drop-shadow(0 0 0.5rem #707070);
  z-index: 10;
  /* background-color: white; */
  /* width: 100%; */
  .weather-header {
    position: absolute;
    color: ${palette.blue};
    display: flex;
    /* flex-direction: row; */
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
  /* flex-grow: 2; */

  /* going to eliminate the gap between the image and the forecast cards  */
  z-index: -1;
  position: relative;
  top: -3px;

  @media screen and (max-width: ${breakpoints.tablet_md}) {
    width: 100%;
  }
`;

// const ForecastCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   color: ${palette.darkGrey};
//   background-color: ${palette.white};
//   padding: 15px 20px 25px 20px;
//   /* width: 100%; */
//   flex-grow: 1;

//   border-left: 1px solid lightgrey;

//   &:nth-child(1) {
//     border-left: none;
//   }

//   .day {
//     font-weight: 900;
//     font-size: 0.8rem;
//     padding-bottom: 10px;
//   }

//   .temp {
//     font-size: 1.5rem;
//   }
//   /* prioritizing flex box to make up 20% of container when it can */
//   @media screen and (max-width: ${breakpoints.tablet_md}) {
//     flex-basis: 20%;
//     border: 1px solid lightgrey;
//   }
// `;

export default Card;
