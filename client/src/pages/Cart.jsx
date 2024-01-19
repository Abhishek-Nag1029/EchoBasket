import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Stripe from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethod";
import { Link, useNavigate } from "react-router-dom";
import { removeProduct } from "../redux/cartRedux";
import axios from "axios";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const NoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 20vh; */
  .noItemImg {
    /* width: 500px; // Adjust the width as needed */
    height: 300px; // Maintain aspect ratio
    /* margin-bottom: 10px; */
    /* margin-top: 100px; */
  }

  .noItemText {
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
  }
`;

const ShopNow = styled.button`
  margin-top: 25px;
  width: 8%;
  border: none;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartLength = cart.products.length;
  console.log(cartLength);
  // const user=useSelector((st))
  const navigate = useNavigate();

  const handleRemove = (item) => {
    try {
      dispatch(removeProduct(item));
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const handleToken = (totalAmount, token) => {
    try {
      const pay = axios.post("https://echobasket-api.vercel.app/api/checkout/payment", {
        token: token.id,
        amount: 500,
      });
      console.log("payyy", pay);
      navigate("/success");
    } catch (err) {
      console.log(err);
    }
  };

  const tokenHandler = (token) => {
    handleToken(100, token);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        {cartLength != 0 && (
          <div>
            <Title>YOUR BAG</Title>
            <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                <TopText>Shopping Bag({cart.quantity})</TopText>
                {/* <TopText>Your Wishlist (0)</TopText> */}
              </TopTexts>
              {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
            </Top>
          </div>
        )}

        {/* <Bottom>
          <Info> */}
        {cart.products.map((product) => (
          <Product>
            <ProductDetail>
              <Image src={product.img} alt="no-image" />
              <Details>
                <ProductName>
                  <b>Product:</b> {product?.title}
                </ProductName>
                <ProductId>
                  <b>ID:</b> {product._id}
                </ProductId>
                <ProductColor color={product.color} />
                <ProductSize>
                  <b>Size:</b> {product.size}
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <AddOutlinedIcon />
                <ProductAmount>{product.quantity}</ProductAmount>
                <RemoveOutlinedIcon />
              </ProductAmountContainer>
              <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
            </PriceDetail>
            <div className="nameForSmallIcon">
              <DisabledByDefaultIcon
                style={{ color: "black" }}
                size="small"
                onClick={() => handleRemove(product)}
              />
            </div>
          </Product>
        ))}
        <Hr />
        {/* </Info> */}

        {cartLength > 0 ? (
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Stripe stripeKey={KEY} token={tokenHandler} />
          </Summary>
        ) : (
          <NoItem>
            <img
              className="noItemImg"
              src="https://img.freepik.com/premium-photo/shopping-cart-is-isolated-white-background-empty-trolley-high-quality-photo_311158-6650.jpg?size=626&ext=jpg&ga=GA1.1.1242371800.1705211990&semt=sph"
              alt="no-img"
            />
            <p className="noItemText">Your cart is Empty</p>
            <ShopNow>
              <Link to="/" style={{color:"white",textDecoration:"none"}}>Shop Now</Link>
            </ShopNow>
          </NoItem>
        )}
        {/* </Bottom> */}
      </Wrapper>
      {/* <Footer /> */}
    </Container>
  );
};

export default Cart;
