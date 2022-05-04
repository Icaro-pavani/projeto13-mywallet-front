import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LoginScreen() {
  const [loginInfo, setLoginInfo] = useState({});

  function updateLoginInfo(event) {
    const { name, value } = event.target;
    setLoginInfo((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <LoginContainer>
      <h1>MyWallet</h1>
      <StyledForm>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={updateLoginInfo}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={updateLoginInfo}
          required
        />
        <button type="submit">Entrar</button>
      </StyledForm>
      <StyledLink to="/signup">
        <p>Primeira vez? Cadastre-se!</p>
      </StyledLink>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 159px;
  padding: 0px 25px;

  h1 {
    font-family: "Saira Stencil One", cursive;
    color: #fff;
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 24px;
  }

  p {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    line-height: 18px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    height: 58px;
    background-color: #fff;
    font-size: 20px;
    line-height: 23px;
    border: none;
    border-radius: 5px;
    margin-bottom: 13px;
    font-family: "Raleway", sans-serif;
    padding-left: 15px;
  }

  button {
    height: 46px;
    border: none;
    border-radius: 5px;
    background-color: #a328d6;
    color: #fff;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: bold;
    line-height: 23px;
    margin-bottom: 36px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
