import styled from "styled-components";
import { xs, sm, md, lg, xl } from "../responsive"; // Import the breakpoints

const Container = styled.div`
  height: 30px;
  display: flex;
  align-items: center; // vertical
  justify-content: center; // horizontal
  background-color: #09292c;
  color: white;
  font-size: 15px;
  font-weight: 500;
  width: 100%;

  /* Responsive styles using utility functions */
  ${xs({
    fontSize: "10px",
    height: "20px",
  })}

  ${sm({
    fontSize: "12px",
    height: "25px",
  })}

  ${md({
    fontSize: "14px",
    height: "28px",
  })}

  ${lg({
    fontSize: "15px",
    height: "30px",
  })}

  ${xl({
    fontSize: "16px",
    height: "35px",
  })}
`;

const Announcement = () => {
  return (
    <Container>
      Unlock Free Shipping: Orders $50+
    </Container>
  );
};

export default Announcement;
