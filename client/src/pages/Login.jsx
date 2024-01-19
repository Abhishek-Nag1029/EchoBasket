import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess, loginStart, loginFailure } from "../redux/userRedux";
import { publicRequest } from "../requestMethod";
import CircularProgress from "@mui/material/CircularProgress";

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
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Lin = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  /* text-decoration: underline; */
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Wrong = styled.p`
  color: "red";
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await publicRequest.post("/auth/login", {
        username,
        password,
      });
      const data = await res.data;
      console.log(data);
      dispatch(loginSuccess(data));
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
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? (
              <CircularProgress
                size={10}
                sx={{ color: "white", padding: "0px", margin: "0px" }}
              />
            ) : (
              "LOGIN"
            )}
          </Button>
          <Lin>
            <Link to="/register">Dont't have an account create here</Link>
          </Lin>
          {err && <Wrong>Wrong Username or Password</Wrong>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
