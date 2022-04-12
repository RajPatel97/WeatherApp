import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { palette } from '../constants/colors';

/**
 * @description this component is used to toggle the unit of measurement
 * the weather data is displayed in.
 */
const ToggleSwitch = ({ isMetric, setIsMetric }) => {
  return (
    <Toggle>
      <input className="toggle-input" type="checkbox" />
      <div
        onClick={() => {
          //switching the units displayed
          setIsMetric(!isMetric);
        }}
        className="toggle-slider"
      >
        <p className="symbol left">&#176;C</p>
        <p className="symbol right">&#176;F</p>
      </div>
    </Toggle>
  );
};

ToggleSwitch.propTypes = {
  isMetric: propTypes.bool.isRequired,
  setIsMetric: propTypes.func.isRequired,
};

const Toggle = styled.label`
  position: absolute;
  right: 80px;
  top: 20px;
  cursor: pointer;

  .symbol {
    position: relative;
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
    color: ${palette.blue};
    margin: 0 0 0 1px;
  }

  .toggle-input {
    display: none;

    &:checked + .toggle-slider {
      background: ${palette.blue};
      .left {
        color: ${palette.white};
      }
      .right {
        color: ${palette.blue};
      }
      &:before {
        left: 2rem; //start
      }
    }
  }

  .toggle-slider {
    width: 2.9rem;
    height: 1.2rem;
    background: #ccc;
    padding: 0.3rem;
    border-radius: 2rem;
    position: absolute;
    transition: 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    display: flex;
    justify-content: space-between;

    &:before {
      content: '';
      width: 1.2rem;
      height: 1.2rem;
      background: ${palette.white};
      position: absolute;
      top: 50%;
      left: 0.3rem;
      transform: translateY(-50%);
      border-radius: 50%;
      transition: 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
  }
`;

export default ToggleSwitch;
