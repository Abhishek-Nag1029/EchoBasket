import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

const Container=styled.div`
    `
const Wrapper=styled.div`
 display: flex;
    min-height: 525px;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
    overflow: hidden;
    margin: 0;
    padding: 0;
    margin: 10px;
 `

const Content=styled.div`
    max-width: 800px;
    border-radius: 50px;
    padding: 5px;
    border: 1px solid rgb(214, 214, 214);
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 15px;
    margin: 5px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
`
const ImgContainer=styled.div`
 /* font-size: 1rem; */
    /* margin-top: 5px; */
    /* border: ; */
    /* background-color: white; */
`
const Img=styled.img`
 /* position: absolute; */
    /* margin-top:1px; */
    /* background-color: white; */
    /* right: 40%; */
    /* margin: 10px; */
    /* font-size: 1.5rem; */
    /* border: 1px solid rgb(206, 206, 206); */
    /* border-radius: 50%; */
    /* padding: 3px; */
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */

width: 250px;
`
const Thanks=styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom:2px;
    padding: 0;
    margin: 0;
    text-align: center;
`

const Order=styled.div`
font-size: 1rem;
    margin-top: 3px;
    margin-bottom:2px;
    text-align: center;
    font-family: "candara", sans-serif;
`

const Query=styled.div`
    font-size: .99rem;
    margin-top: 5px;
    text-align: center;
    font-family: "candara", sans-serif;
`

const Product=styled.div`
    font-size: 0.80rem;
    margin-top: 2px;
    font-family: "candara", sans-serif;
    /* text-decoration: underline; */
`
const StyledLink=styled(Link)`
 font-weight: 700;
    margin-top: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`

const Success = () => {
  const location = useLocation();
  // console.log(location);

  return (
   <Container>
   <Navbar/>
   <Announcement/>
    <Wrapper>
        <Content>
        <ImgContainer>
           <Img src="https://t3.ftcdn.net/jpg/05/17/13/48/240_F_517134833_HJ0MoCF0fOo13Xu4OPCObgi9BLCWKiaa.jpg"/>
        </ImgContainer>
        <Thanks>
        Thanks for shopping with us!
        </Thanks>
        <Order>
          Your Order has been Successfully Placed.
        </Order>
        <Query>
         For any queries Contact:
        </Query>
        <Product>
          AbhishekNag@gmail.com
        </Product>

        <StyledLink to="/">
          Continue Shopping
        </StyledLink>
        </Content>
       

        
    </Wrapper>
   </Container>
  );
};

export default Success;
