import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { palette } from '../constants/colors';
import { breakpoints } from '../constants/mixins';
import getIcon from '../util/getIcons';

/**
 * @description this component is used to render the weather forecast for
 * the next 1 day. weather data is passed in as props.
 */
const WeatherCard = ({ day = 'Loading...', iconCode, temp = 'Loading...' }) => {
  return (
    <Container>
      <Day>{day}</Day>
      {getIcon(iconCode, palette.blue, 70)}
      <Temp>{Math.floor(temp)}&#176;</Temp>
    </Container>
  );
};

WeatherCard.propTypes = {
  day: propTypes.string.isRequired,
  iconCode: propTypes.number.isRequired,
  temp: propTypes.number.isRequired,
};

const Day = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`;

const Temp = styled.p`
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${palette.darkGrey};
  background-color: ${palette.white};
  padding: 15px 20px 25px 20px;
  flex-grow: 1;
  border-left: 1px solid lightgrey;

  &:nth-child(1) {
    border-left: none;
  }

  /* prioritizing flex box to make up more space when it can */
  @media screen and (max-width: ${breakpoints.tablet_md}) {
    flex-basis: 20%;
    border: 1px solid lightgrey;
  }
`;

export default WeatherCard;
