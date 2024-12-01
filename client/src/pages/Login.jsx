import styled from "styled-components";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess, loginStart, loginFailure } from "../redux/userRedux";
import { publicRequest } from "../requestMethod";
import CircularProgress from "@mui/material/CircularProgress";
import { mobile, xs, sm, md, lg, xl } from "../responsive"; // Import responsive helper

// Styled components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  ${mobile({ width: "80%" })} // For small devices
  ${xs({ width: "90%" })} // For extra small devices (e.g., very small mobile screens)
  ${sm({ width: "70%" })} // For small to medium devices (e.g., larger smartphones)
  ${md({ width: "50%" })} // For medium devices (e.g., tablets)
  ${lg({ width: "40%" })} // For large devices (e.g., laptops)
  ${xl({ width: "30%" })} // For extra large devices (e.g., desktops)
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  
  &:focus {
    border-color: teal;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #00695c;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Lin = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await publicRequest.post("/auth/login", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      setErr(true);
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? (
              <CircularProgress size={20} sx={{ color: "white" }} />
            ) : (
              "LOGIN"
            )}
          </Button>
          {err && <Error>Wrong Username or Password</Error>}
          <Lin>
            <Link to="/register" style={{ textDecoration: "none", color: "teal" }}>
              Don't have an account? Create one here
            </Link>
          </Lin>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
