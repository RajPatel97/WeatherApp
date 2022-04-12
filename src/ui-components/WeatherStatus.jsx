import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import getIcon from '../util/getIcons';
import { palette } from '../constants/colors';
import { breakpoints } from '../constants/mixins';

/**
 * @description this component is used to render the current weather date for the
 * location being displayed. This component is meant to be rendered on top of teh main card component.
 *
 */
const WeatherStatus = ({
  temp,
  iconCode,
  weatherCondition,
  wind,
  isMetric,
}) => {
  return (
    <Container>
      <p>{Math.floor(temp)}&#176;</p>
      {getIcon(iconCode, palette.blue, 90)}
      <ul>
        <li>{weatherCondition}</li>
        <li className="wind-speed">{`${Math.floor(wind)} ${
          isMetric ? 'm/s' : 'mph'
        }`}</li>
      </ul>
    </Container>
  );
};

WeatherStatus.propTypes = {
  temp: propTypes.any.isRequired,
  weatherCondition: propTypes.string.isRequired,
  wind: propTypes.any.isRequired,
  iconCode: propTypes.any,
  isMetric: propTypes.bool.isRequired,
};

const Container = styled.div`
  position: absolute;
  color: ${palette.blue};
  /* width: 100%; */
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
    font-weight: 900;
  }
  .wind-speed {
    text-transform: lowercase;
  }

  @media screen and (max-width: ${breakpoints.tablet_md}) {
    margin: 5px 0 0 10px;
  }
`;

export default WeatherStatus;
