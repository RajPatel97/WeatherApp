import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

import propTypes from 'prop-types';
import { breakpoints } from '../constants/mixins';
import { palette } from '../constants/colors';

const SearchBar = ({ setSearchCity, setSearchState }) => {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let res = input.split(/[, ]+/, 2); //regex to split on commas and spaces, multi word city names have to be entered without a space in between
    console.log(res);
    setSearchCity(res[0]);
    setSearchState(res[1]);
    setInput('');
    // console.log(input.split(/[, ]+/));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} action="get">
        <input
          value={input}
          onInput={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter a City and State"
        />
        <div onClick={handleSubmit} className="search-icon">
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  margin-bottom: 2rem;

  .search-icon {
    visibility: visible;
  }
  form {
    display: flex;
  }

  &:hover,
  &:active,
  &:focus-within {
    input {
      width: 100%;
      opacity: 100;
      border-color: white;
      transition: 700ms;
      width: 100%;
      visibility: visible;
    }
  }

  input {
    ::placeholder {
      color: ${palette.darkGrey};
    }
    transition: 100ms;
    opacity: 0;
    width: 0px;
    color: ${palette.white};
    font-size: 0.8rem;
    background: none;
    border: none;
    outline: none;
  }

  @media screen and (max-width: ${breakpoints.tablet_md}) {
    margin-bottom: 1rem;
  }
`;

export default SearchBar;
