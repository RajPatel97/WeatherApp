import styled from "styled-components";
import Proptypes from "prop-types";
import { MdLocationPin } from "react-icons/md";
import { palette } from "../constants/colors";

const Header = ({ location, date }) => {
  return (
    <Container>
      <h3>
        <MdLocationPin />
        {location}
      </h3>
      <p>{date}</p>
    </Container>
  );
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
