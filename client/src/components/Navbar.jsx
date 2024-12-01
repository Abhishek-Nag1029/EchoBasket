import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React, { useState } from "react";
import styled from "styled-components";
import { xs, sm, md, lg, xl } from "../responsive"; // Import breakpoints
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogout } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;

  ${xs({
    height: "50px",
  })}

  ${sm({
    height: "55px",
  })}

  ${md({
    height: "58px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${xs({
    padding: "10px 0px",
    justifyContent: "space-between", // Ensure space around items
  })}

  ${sm({
    padding: "10px 5px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${xs({
    display: "none", // Hide Left section for small screens
  })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${xs({
    display: "none",
  })}

  ${sm({
    fontSize: "12px",
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${xs({
    display: "none", // Hide search bar for small screens
  })}
`;

const Input = styled.input`
  border: none;
  outline: none;

  ${xs({
    width: "50px",
  })}

  ${sm({
    width: "70px",
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center; /* Center the content */
  align-items: center; /* Vertically center the content */
`;

const Logo = styled.h1`
  text-align: center;
  color: red;
  font-weight: bold;
  width: 100%; /* Ensure it takes full width on small devices */

  ${xs({
    fontSize: "18px",
    textAlign: "center",  // Ensure centering on mobile
  })}

  ${sm({
    fontSize: "22px",
  })}

  ${md({
    fontSize: "24px",
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${xs({
    flex: "2",
    justifyContent: "center", // Center the content for small devices
  })}
`;

const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 14px;
  cursor: pointer;

  ${xs({
    marginLeft: "10px",
    fontSize: "10px",
  })}

  ${sm({
    marginLeft: "15px",
    fontSize: "12px",
  })}
`;

const SignOut = styled.div`
  border: none;
  padding: 5px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 10px;

  ${xs({
    padding: "3px 7px",
  })}

  ${sm({
    padding: "4px 8px",
  })}
`;

const Navbar = ({ user }) => {
  var isUser = false;
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state?.user?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const location = useLocation();
  console.log(location.pathname);

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
                <Link to="/login">SIGN IN</Link>
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
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  LogOut
                </Link>
              </SignOut>
            </div>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
