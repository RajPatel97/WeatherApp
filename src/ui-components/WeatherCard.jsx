import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import { palette } from "../constants/colors";
import { breakpoints } from "../constants/mixins";
import getIcon from "../util/getIcons";

const WeatherCard = ({
  day = "Loading...",
  iconCode = 200,
  temp = "Loading...",
}) => {
  return (
    <Container>
      <p className="day">{day}</p>
      {getIcon(iconCode, palette.blue, 70)}
      <p className="temp">{Math.floor(temp)}&#176;</p>
    </Container>
  );
};

WeatherCard.propTypes = {
  day: propTypes.string.isRequired,
  iconCode: propTypes.number,
  temp: propTypes.number.isRequired,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${palette.darkGrey};
  background-color: ${palette.white};
  padding: 15px 20px 25px 20px;
  /* width: 100%; */
  flex-grow: 1;
  border-left: 1px solid lightgrey;

  &:nth-child(1) {
    border-left: none;
  }

  .day {
    font-weight: 900;
    font-size: 0.8rem;
    padding-bottom: 10px;
  }

  .temp {
    font-size: 1.5rem;
  }

  /* prioritizing flex box to make up 20% of container when it can */
  @media screen and (max-width: ${breakpoints.tablet_md}) {
    flex-basis: 20%;
    border: 1px solid lightgrey;
  }
`;

export default WeatherCard;
