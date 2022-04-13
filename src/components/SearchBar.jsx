import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

import propTypes from 'prop-types';
import { breakpoints } from '../constants/mixins';
import { palette } from '../constants/colors';

/**
 * @description this component is used to get new weather date
 * from user's input. the input is used to make new api calls with the location entered.
 */
const SearchBar = ({ setSearchCity, setSearchState }) => {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const [city, state] = input.split(/[, ]+/, 2); //regex to split on commas and spaces, multi word city names have to be entered without a space in between
    setSearchCity(city);
    setSearchState(state);
    setInput('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Search
          value={input}
          onInput={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter a City and State"
        />
        <div onClick={handleSubmit}>
          <AiOutlineSearch size={20} />
        </div>
      </form>
    </Container>
  );
};

SearchBar.propTypes = {
  setSearchCity: propTypes.func.isRequired,
  setSearchState: propTypes.func.isRequired,
};

const Search = styled.input`
  transition: 100ms;
  width: 0px;
  color: ${palette.white};
  font-size: 0.8rem;
  background: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${palette.darkGrey};
  }
`;

const Container = styled.div`
  cursor: pointer;
  margin-bottom: 1.5rem;

  form {
    display: flex;
  }

  /* hover has to occur over the whole container to allow the input to show itself  */
  &:hover,
  &:active,
  &:focus-within {
    input {
      width: 100%;
      opacity: 100;
      border-color: white;
      transition: 700ms;
      width: 100%;
      border-bottom: 1px solid ${palette.white};
      visibility: visible;
    }
  }

  @media screen and (max-width: ${breakpoints.tablet_md}) {
    margin-bottom: 1rem;
  }
`;

export default SearchBar;
