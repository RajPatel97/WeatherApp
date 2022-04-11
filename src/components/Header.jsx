import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { MdLocationPin } from 'react-icons/md';

import { palette } from '../constants/colors';

const Header = ({ city, state, date }) => {
  return (
    <Container>
      <h3>
        <MdLocationPin />
        {city + ', ' + state}
      </h3>
      <p>{date}</p>
    </Container>
  );
};

Header.propTypes = {
  city: propTypes.string.isRequired,
  state: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${palette.white};
  margin: 0 0 25px 0;

  h3 {
    font-size: 1.1rem;
    margin: 0 0 5px 0;
    font-weight: 600;
  }

  p {
    font-size: 0.85rem;
    /* font-weight: 200; */
  }
`;

export default Header;
