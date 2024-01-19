import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogout } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  text-align: center;
  color: red;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "center" })}
`;

const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 14px;
  cursor: pointer;
  ${mobile({ marginLeft: "12px", fontSize: "10px" })}
`;

const SignOut=styled.div`
  /* margin-top: 25px; */
  /* width: 8%; */
  border: none;
  padding: 5px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 10px;`

const Navbar = ({ user }) => {
  var isUser = false;
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state?.user?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const location = useLocation();
  console.log(location.pathname);
  // console.log(quantity);

  if (currentUser) {
    console.log(currentUser.username);
    isUser = true;
  } else {
    console.log("no user");
    isUser = false;
  }

  const handleLogout = () => {
    console.log("currentUser", currentUser);
    dispatch(setLogout());
    console.log("currentUser", currentUser);
    // navigate("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "red",
              }}
            >
              EchoBasket
            </Link>
          </Logo>
        </Center>
        <Right>
          {!currentUser ? (
            <>  
              
              
                <MenuItem>
                <Link to="/login" >SIGN IN</Link>
                </MenuItem>
             
              <Link to="/register">
                <MenuItem>SIGN UP</MenuItem>
              </Link>
            </>
          ) : (
            <div style={{ display: "flex", gap: "15px" }}>
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </MenuItem>
              </Link>
              <SignOut type="submit" onClick={handleLogout}>
              <Link to="/" style={{color:"white",textDecoration:"none"}}>LogOut</Link>
              </SignOut>
            </div>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
