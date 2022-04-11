import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import getIcon from '../util/getIcons';
import { palette } from '../constants/colors';

const WeatherStatus = ({ temp, iconCode, weatherCondition, wind }) => {
  return (
    <Container>
      <p>{Math.floor(temp)}&#176;</p>
      {getIcon(iconCode, palette.blue, 90)}
      <ul>
        <li>{weatherCondition}</li>
        <li>{wind}</li>
      </ul>
    </Container>
  );
};

WeatherStatus.propTypes = {
  temp: propTypes.any.isRequired,
  weatherCondition: propTypes.string.isRequired,
  wind: propTypes.any.isRequired,
  iconCode: propTypes.number,
};

const Container = styled.div`
  display: flex;
  margin: 10px 0 0 30px;

  p {
    font-size: 3rem;
  }

  ul {
    margin: 20px 0 0 10px;
  }

  li {
    font-size: 0.85rem;
    text-transform: capitalize;
    padding-bottom: 4px;
  }
`;

export default WeatherStatus;
