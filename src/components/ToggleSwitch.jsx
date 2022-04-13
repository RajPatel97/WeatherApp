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
        <Degree className="left" color={palette.blue}>
          &#176;C
        </Degree>
        <Degree className="right" color={palette.white}>
          &#176;F
        </Degree>
      </div>
    </Toggle>
  );
};

ToggleSwitch.propTypes = {
  isMetric: propTypes.bool.isRequired,
  setIsMetric: propTypes.func.isRequired,
};

const Degree = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 9;
  font-size: 0.75rem;
  font-weight: 900;
  transition: 300ms;
  padding: 2px;
  color: ${(props) => props.color || palette.blue};
`;

const Toggle = styled.label`
  position: absolute;
  right: 80px;
  top: 20px;
  cursor: pointer;

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
        left: 2rem;
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
