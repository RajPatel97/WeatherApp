import styled from "styled-components";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";
import { palette } from "../constants/colors";

const ToggleSwitch = () => {
  return (
    <Toggle>
      <input id="my-toggle" className="toggle__input" type="checkbox" />
      <div className="toggle__slider">
        <p className="symbol left">&#176;C</p>
        <p className="symbol right">&#176;F</p>
        {/* <WiCelsius className="symbol left" color="black" size={25} />
        <WiFahrenheit className="symbol right" color="black" size={25} /> */}
      </div>
    </Toggle>
  );
};

const Toggle = styled.label`
  /* display: inline-block; */
  margin-right: 100px;
  /* TODO: this is a temp fix above  */
  cursor: pointer;

  .symbol {
    display: flex;
    align-items: center;
    z-index: 9;
    font-size: 0.8rem;
    font-weight: 900;
    margin: 0 5px 0 5px;
    transition: 300ms;
  }
  .right {
    color: ${palette.white};
  }
  .left {
    margin: 0 0 0 2px;
  }

  .toggle__input {
    display: none;

    &:checked + .toggle__slider {
      /* background: #54acd2; */
      background: ${palette.blue};
      .left {
        color: ${palette.white};
      }
      .right {
        color: ${palette.blue};
      }
      &:before {
        left: 2em;
      }
    }
  }

  .toggle__slider {
    width: 2.9em;
    height: 1.2em;
    background: #ccc;
    padding: 0.3em;
    border-radius: 2em;
    position: absolute;
    transition: 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    display: flex;
    justify-content: space-between;

    &:before {
      content: "";
      width: 1.2em;
      height: 1.2em;
      background: ${palette.white};
      position: absolute;
      top: 50%;
      left: 0.3em;
      transform: translateY(-50%);
      border-radius: 50%;
      transition: 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
  }
`;

export default ToggleSwitch;
