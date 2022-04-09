import styled from "styled-components";

import { palette } from "../constants/colors";
import Dallas from "../assets/Dallas.png";

const Card = () => {
  return (
    <Container>
      <BackgroundImage src={Dallas} />

      <ForcastContainer>
        <ForcastCard>sunny</ForcastCard>
        <ForcastCard>sunny</ForcastCard>
        <ForcastCard>sunny</ForcastCard>
        <ForcastCard>sunny</ForcastCard>
        <ForcastCard>sunny</ForcastCard>
      </ForcastContainer>
    </Container>
  );
};

const Container = styled.div``;

const BackgroundImage = styled.img`
  /* making the image fit with the width */
  width: 100%;
  height: auto;
`;

const ForcastContainer = styled.div`
  display: flex;
  /* width: 100%; */
`;

const ForcastCard = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  color: ${palette.grey};
  background-color: ${palette.white};
  padding: 10px 20px 10px 20px;
  width: 100%;
  /* border: 1px solid ${palette.grey}; */
  /* margin-right: 1px; */
`;

export default Card;
