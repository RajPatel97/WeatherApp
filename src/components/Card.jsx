import styled from "styled-components";
import { WiDayRainWind } from "react-icons/wi";

import { palette } from "../constants/colors";
import Dallas from "../assets/Dallas.png";
import ToggleSwitch from "./ToggleSwitch";
// import { breakpoints } from "../constants/mixins";

const WeatherHeader = () => {
  return (
    <WeatherHeaderContainer>
      <div className="weather_Status">
        <p>93&#176;</p>
        <WiDayRainWind size={70}></WiDayRainWind>
        <ul>
          <li>partly cloudy</li>
          <li>12 mph</li>
        </ul>
      </div>
      <ToggleSwitch />
    </WeatherHeaderContainer>
  );
};

const Card = () => {
  return (
    <Container>
      <WeatherHeader />
      <BackgroundImage src={Dallas} />

      <ForcastContainer>
        <ForcastCard>
          <p className="day">Thu</p>
          <WiDayRainWind color={palette.blue} size={50}></WiDayRainWind>
          <p className="temp">93&#176;</p>
        </ForcastCard>
        <ForcastCard>
          <p className="day">Thu</p>
          <WiDayRainWind color={palette.blue} size={50}></WiDayRainWind>
          <p className="temp">93&#176;</p>
        </ForcastCard>
        <ForcastCard>
          <p className="day">Thu</p>
          <WiDayRainWind color={palette.blue} size={50}></WiDayRainWind>
          <p className="temp">93&#176;</p>
        </ForcastCard>
        <ForcastCard>
          <p className="day">Thu</p>
          <WiDayRainWind color={palette.blue} size={50}></WiDayRainWind>
          <p className="temp">93&#176;</p>
        </ForcastCard>
        <ForcastCard>
          <p className="day">Thu</p>
          <WiDayRainWind color={palette.blue} size={50}></WiDayRainWind>
          <p className="temp">93&#176;</p>
        </ForcastCard>
      </ForcastContainer>
    </Container>
  );
};

const Container = styled.div`
  filter: drop-shadow(0 0 0.5rem #707070);
  z-index: 10;
  /* background-color: white; */
  /* width: 100%; */
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const BackgroundImage = styled.img`
  /* making the image fit with the width */
  width: 100%;
  height: auto;
`;

const ForcastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* flex-grow: 2; */

  /* going to eliminate the gap between the image and the forecast cards  */
  z-index: -1;
  position: relative;
  top: -3px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const ForcastCard = styled.div`
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

  :nth-child(1) {
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
  @media screen and (max-width: 640px) {
    flex-basis: 20%;
    border: 1px solid lightgrey;
  }
`;

const WeatherHeaderContainer = styled.div`
  /* margin: 10px 0 0 30px; */
  position: absolute;
  color: ${palette.blue};
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  width: 100%;

  .weather_Status {
    display: flex;
    margin: 10px 0 0 30px;
  }

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

export default Card;
