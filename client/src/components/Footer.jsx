import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';


import styled from "styled-components";
import { mobile } from "../responsive";
//   import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    /* background-color:#474747; */
    
    ${mobile({flexDirection:"column"})}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
    ${mobile({textAlign:"center"})}`;
  
  const Desc = styled.p`
    margin: 20px 0px;
      ${mobile({textAlign:"center",fontSize:"16px"})}
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    ${mobile({alignItems:"center",justifyContent:"center"})}
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
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    /* ${mobile({textAlign:"center"})} */
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#eee"})}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    /* ${mobile({justifyContent:"center"})} */
  `;
  
  const Payment = styled.img`
      width: 50%;
      ${mobile({display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width:"50%"})}
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
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <HomeIcon style={{marginRight:"10px"}}/> IIIT RANCHI
          </ContactItem>
          <ContactItem>
            <LocalPhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <ContactMailIcon style={{marginRight:"10px"}} /> contact@abhishek
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;