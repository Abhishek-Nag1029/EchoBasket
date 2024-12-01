import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';

import styled from "styled-components";
import { mobile, xs, sm, md, lg, xl } from "../responsive";

// Import Google Fonts for better typography
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f1f1f1;
  padding: 20px;
  font-family: 'Roboto', sans-serif; /* Default font for the footer */
  ${mobile({ flexDirection: "column", textAlign: "center" })};
  ${sm({ flexDirection: "row" })};
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@400;600&display=swap');
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-family: 'Poppins', sans-serif; /* Beautiful font for the logo */
  font-weight: 600;
  ${mobile({ textAlign: "center" })};
  color: #333;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
  color: #666;
  font-weight: 300;
  line-height: 1.6;
  ${mobile({ textAlign: "center", fontSize: "14px" })};
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  ${mobile({ justifyContent: "center" })};
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  
  ${xs({ marginRight: "15px" })};
  ${sm({ marginRight: "20px" })};
  ${md({ marginRight: "25px" })};
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })};
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif; /* Title font */
  font-weight: 600;
  color: #333;
  ${mobile({ textAlign: "center" })};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${mobile({ justifyContent: "center" })};
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #555;
  ${mobile({ width: "100%" })};
  ${mobile({ fontSize: "14px", textAlign: "center" })};
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #eee;
  ${mobile({ backgroundColor: "#f9f9f9" })};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #555;
  ${mobile({ justifyContent: "center", fontSize: "14px" })};
`;

const Payment = styled.img`
  width: 50%;
  ${mobile({ display: "block", margin: "20px auto", width: "70%" })};
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EchoBasket.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <AlternateEmailIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <HomeIcon style={{ marginRight: "10px" }} /> IIIT RANCHI
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <ContactMailIcon style={{ marginRight: "10px" }} /> contact@abhishek
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
