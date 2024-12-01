import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { sliderItems } from "../data";
import { mobile, xs, sm, md, lg, xl } from "../responsive";

// Container with responsive styles
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

// Arrow styling with responsiveness
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  background-color: #fff7f7;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  ${mobile({ width: "35px", height: "35px" })}
  ${xs({ width: "40px", height: "40px" })}
`;

// Wrapper with transition and responsiveness
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

  ${xs({ transform: "translateX(0)" })}
  ${sm({ transform: "translateX(0)" })}
`;

// Slide styling with dynamic background
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => `#${props.bg}`};

  ${xs({ height: "70vh" })}
  ${sm({ height: "80vh" })}
  ${md({ height: "85vh" })}
`;

// Image container
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Image styling with object-fit to ensure responsiveness
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // Ensures the image fills the container without distorting
  ${mobile({ width: "80%", height: "80%" })}
`;

// Info container for the text and button
const InfoContainer = styled.div`
  padding: 30px 50px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  background-color: rgba(255, 255, 255, 0.7);

  ${xs({ padding: "20px 40px" })}
  ${sm({ padding: "20px 40px" })}
  ${md({ padding: "20px 40px" })}
`;

// Title styling
const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;

  ${xs({ fontSize: "35px" })}
  ${sm({ fontSize: "40px" })}
`;

// Description styling
const Desc = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #555;
  margin: 20px 0;
  line-height: 1.6;
  letter-spacing: 1px;

  ${xs({ fontSize: "14px" })}
  ${sm({ fontSize: "16px" })}
`;

// Button styling
const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  background-color: #ff7b7b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4c4c;
  }

  ${xs({ fontSize: "14px", padding: "10px 18px" })}
  ${sm({ fontSize: "15px", padding: "12px 20px" })}
`;

// Slider component
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, index) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt={item.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
