import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

//this cloud starts on the right side
const CloudOne = ({ width, height, opacity, props }) => (
  <Container
    className="cloud-one"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 212.568 123.676"
    {...props}
  >
    <path
      d="M50.917,86.117a41.1,41.1,0,0,1-14.643,2.655C16.24,88.771,0,74.761,0,57.479S16.24,26.185,36.274,26.185a41.252,41.252,0,0,1,13.557,2.259C61.23,11.45,82.665,0,107.228,0c19.074,0,36.26,6.9,48.327,17.945a15.239,15.239,0,0,1,25.391,9.9c14.737,1.97,25.991,12.546,25.991,25.3,0,14.153-13.865,25.627-30.969,25.627A37.188,37.188,0,0,1,168.386,78c-9.9,20.542-33.551,35-61.158,35C83.423,113,62.557,102.249,50.917,86.117Z"
      transform="translate(206.839 124.338) rotate(-177)"
      fill="#fff"
      opacity={opacity}
    />
  </Container>
);
CloudOne.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
  opacity: propTypes.number,
  props: propTypes.any,
};

CloudOne.defaultProps = {
  width: 212,
  height: 123,
  opacity: 0.888,
};

//this cloud starts on the left side
const CloudTwo = ({ width, height, opacity, props }) => (
  <Container
    className="cloud-two"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 154.034 100.052"
    {...props}
  >
    <path
      d="M63.743,79.144A18.074,18.074,0,0,1,52.5,83,17.48,17.48,0,0,1,36.037,72.108,27.3,27.3,0,0,1,26,74C11.641,74,0,63.031,0,49.5S11.641,25,26,25a27.041,27.041,0,0,1,14.086,3.9C45.8,12.142,62.632,0,82.5,0c17.348,0,32.377,9.258,39.717,22.765A18.467,18.467,0,0,1,127.5,22c9.665,0,17.5,7.388,17.5,16.5S137.165,55,127.5,55a18.67,18.67,0,0,1-2.829-.215C118.731,71.19,102.1,83,82.5,83A47.046,47.046,0,0,1,63.743,79.144Z"
      transform="translate(10.485 0.861) rotate(7)"
      fill="#fff"
      opacity={opacity}
    />
  </Container>
);

CloudTwo.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
  opacity: propTypes.number,
  props: propTypes.any,
};

CloudTwo.defaultProps = {
  width: 154,
  height: 100,
  opacity: 0.888,
};

const Container = styled.svg`
  z-index: 99;
  position: absolute;
  @keyframes move-around1 {
    0% {
      transform: translate(-170%, -35%);
    }
    50% {
      transform: translate(170%, -35%);
    }
    100% {
      transform: translate(-170%, -35%);
    }
  }
  @keyframes move-around2 {
    0% {
      transform: translate(250%, -35%);
    }
    50% {
      transform: translate(-250%, -35%);
    }
    100% {
      transform: translate(250%, -35%);
    }
  }

  &.cloud-one {
    animation: move-around1 35s infinite;
  }
  &.cloud-two {
    animation: move-around2 35s infinite;
  }
`;

export { CloudOne, CloudTwo };
