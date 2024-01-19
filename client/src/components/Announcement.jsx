import styled from "styled-components"

const Container=styled.div`
height:30px;
display: flex;
align-items: center;
justify-content: center;
background-color:#09292C;
color:white;
font-size: 15px;
font-weight: 500;

`

const Announcement = () => {
  return (
    <Container>
      Unlock Free Shipping: Orders $50+
    </Container>
  )
}

export default Announcement
