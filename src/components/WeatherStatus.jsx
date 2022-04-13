import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import getIcon from '../util/getIcons';
import { palette } from '../constants/colors';
import { breakpoints } from '../constants/mixins';

/**
 * @description this component is used to render the current weather date for the
 * location being displayed. This component is meant to be rendered on top of teh main card component.
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
      <Temp>{Math.floor(temp)}&#176;</Temp>
      {getIcon(iconCode, palette.blue, 90)}
      <ul>
        <ListItem>{weatherCondition}</ListItem>
        <ListItem lowercase={true}>
          {`${Math.floor(wind)} ${isMetric ? 'm/s' : 'mph'}`}
        </ListItem>
      </ul>
    </Container>
  );
};

WeatherStatus.propTypes = {
  temp: propTypes.number.isRequired,
  weatherCondition: propTypes.string.isRequired,
  wind: propTypes.any.isRequired,
  iconCode: propTypes.number,
  isMetric: propTypes.bool.isRequired,
};

const Temp = styled.p`
  font-size: 3rem;
`;

const ListItem = styled.li`
  font-size: 0.85rem;
  text-transform: ${(props) => (props.lowercase ? 'lowercase' : 'capitalize')};
  padding-bottom: 4px;
  font-weight: 900;
`;

const Container = styled.div`
  position: absolute;
  color: ${palette.blue};
  display: flex;
  align-items: center;
  left: 30px;

  @media screen and (max-width: ${breakpoints.tablet_md}) {
    left: 10px;
  }
`;

export default WeatherStatus;
