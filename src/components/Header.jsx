import styled from "styled-components";
import Proptypes from "prop-types";

import { palette } from "../constants/colors";

const Header = ({ location, date }) => {
  return (
    <Container>
      <h3>{location}</h3>
      <p>{date}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${palette.white};
  padding: 0 0 25px 0;
  h3 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.85rem;
  }
`;

export default Header;
