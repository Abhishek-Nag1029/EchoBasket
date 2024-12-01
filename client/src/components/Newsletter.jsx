import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components";
import { mobile, xs, sm, md, lg, xl } from "../responsive";
import { useEffect } from 'react';

// Import Google Fonts for better typography
const Container = styled.div`
  height: 60vh;
  background-color: #fdf9f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  font-family: 'Roboto', sans-serif; /* Default font */
  ${mobile({ height: "auto", padding: "40px 20px" })}
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@400;600&display=swap');
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: #2C3E50;
  font-family: 'Poppins', sans-serif; /* Beautiful font */
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  ${mobile({ fontSize: "60px" })}
  ${sm({ fontSize: "65px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color: #7F8C8D;
  text-align: center;
  font-family: 'Roboto', sans-serif; /* Beautiful font */
  line-height: 1.6;
  ${mobile({ fontSize: "22px", textAlign: "center" })}
  ${sm({ fontSize: "23px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%", height: "45px" })}
  ${sm({ width: "70%" })};
  ${md({ width: "60%" })};
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-size: 16px;
  ${mobile({ fontSize: "14px" })}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  ${mobile({ fontSize: "16px", padding: "8px" })}
  ${sm({ fontSize: "17px", padding: "10px" })}
`;

const MobileInputContainer = styled.div`
  width: 80%;
  height: 45px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  padding: 5px;
  ${mobile({ display: "flex", justifyContent: "space-between" })}
  ${sm({ display: "none" })}
`;

const Newsletter = () => {
  return (
    <Container>
      {/* For larger screens, show the Title and Description */}
      <Title>Stay Updated</Title>
      <Desc>Get timely updates on the latest products and offers.</Desc>

      {/* Input and button for all screen sizes */}
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
