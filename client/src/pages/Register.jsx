import styled from "styled-components";
import { mobile, xs, sm, md, lg, xl } from "../responsive";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "90%" })};  /* More reduced width on small screens */
  ${xs({ width: "85%" })};     /* Smaller width on extra small screens */
  ${sm({ width: "75%" })};     /* Reduced width on small screens */
  ${md({ width: "60%" })};     /* Slightly larger on medium screens */
  ${lg({ width: "50%" })};     /* Standard size for large screens */
  ${xl({ width: "40%" })};     /* Default for extra-large screens */
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.email === "" || user.username === "" || user.password === "") {
        alert("please Enter all fields");
        return;
      }

      setLoading(true);
      const res = await axios.post(
        "https://echobasket-api.vercel.app/api/auth/register",
        user
      );
      const data = await res.data;
      console.log(data);
      navigate("/login");
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          {/* <Input placeholder="confirm password" /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
        {error && <p className="wrong">Something went Wrong..</p>}
      </Wrapper>
    </Container>
  );
};

export default Register;
