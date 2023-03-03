import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/auth/authSlice";
import styled from "styled-components";
const Auth = () => {
  const dispatch = useDispatch();

  const { Auth } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (email.includes("@") && password.length > 4) {
      dispatch(login({ email: email, password: password }));
      navigate("/todos");
    }
  };

  return (
    <>
      <Form onSubmit={onLogin}>
        <Main>
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Main>
        <label htmlFor="password">PASSWORD</label>
        <Main>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Main>
        <Button>
          <button>LOGIN</button>
        </Button>
      </Form>
    </>
  );
};

export default Auth;

const Form = styled.form`
  display: grid;
  padding: 100px;
  margin: 5rem auto;
  box-shadow: 0 8px 8px rgba(94, 10, 10, 0.2);
  width: 25rem;
  border-radius: 8px;
  text-align: center;
  background-color: #f4f0fa;
`;

const Main = styled.div`
  margin-bottom: 0.5rem;
  label {
    display: block;
    color: #0f0e0e;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  input {
    width: 20rem;
    height: 20px;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #100d0d;
  }
`;

const Button = styled.div`
  background-color: #d891c8;
  width:370px;
  height:27px;
  margin-left:20px;
`;
