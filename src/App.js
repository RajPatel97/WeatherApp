import styled from "styled-components";

import Card from "./components/Card";
import Header from "./components/Header";
import { palette } from "./constants/colors";
import { CloudOne, CloudTwo } from "./icons/Clouds";

function App() {
  return (
    <div>
      <Container>
        <CloudOne />
        <CloudTwo />
        <Header location={"Dallas, TX"} date={"Saturday, Sep 16, 2022"} />
        <Card />
      </Container>
    </div>
  );
}
const Container = styled.div`
  color: ${palette.white};
  display: flex;
  flex-direction: column;
  /* margin-top: 100px; */
  margin-top: 10%;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export default App;
