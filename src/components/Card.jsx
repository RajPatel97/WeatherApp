import styled from "styled-components";
import { WiDayRainWind } from "react-icons/wi";

import { palette } from "../constants/colors";
import Dallas from "../assets/Dallas.png";
import ToggleSwitch from "./ToggleSwitch";

const WeatherHeader = () => {
  return (
    <WeatherHeaderContainer>
      <div className="left">
        <p>93&#176;</p>
        <WiDayRainWind size={70}></WiDayRainWind>
        <ul>
          <li>partly cloudy</li>
          <li>12 mph</li>
        </ul>
      </div>
      <ToggleSwitch className="right" />
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

  .vl {
    /* position: relative;
    top: -2px; */
    /* border-left: 1px solid lightgrey; */
  }
`;

const BackgroundImage = styled.img`
  /* making the image fit with the width */
  width: 100%;
  height: auto;
`;

const ForcastContainer = styled.div`
  display: flex;
  /* going to eliminate the gap between the image and the forecast cards  */
  z-index: -1;
  position: relative;
  top: -3px;
`;

const ForcastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${palette.darkGrey};
  background-color: ${palette.white};
  padding: 15px 20px 25px 20px;
  width: 100%;
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
`;

const WeatherHeaderContainer = styled.div`
  margin: 10px 0 0 30px;
  position: absolute;
  color: ${palette.blue};
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  width: 100%;

  .left {
    display: flex;
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
