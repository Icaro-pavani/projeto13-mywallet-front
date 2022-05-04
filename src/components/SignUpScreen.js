import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUpScreen() {
  const [signUpInfo, setSignUpInfo] = useState({});

  function updateSignUpInfo(event) {
    const { name, value } = event.target;
    setSignUpInfo((prevState) => ({ ...prevState, [name]: value }));
  }

  console.log(signUpInfo);

  return (
    <SignUpContainer>
      <h1>MyWallet</h1>
      <StyledForm>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={updateSignUpInfo}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={updateSignUpInfo}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={updateSignUpInfo}
          required
        />
        <input
          type="password"
          name="repeat_password"
          placeholder="Confirme a senha"
          onChange={updateSignUpInfo}
          required
        />
        <button type="submit">Cadastrar</button>
      </StyledForm>
      <StyledLink to="/">
        <p>Já tem uma conta? Entre agora!</p>
      </StyledLink>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 95px;
  padding: 0px 25px;

  h1 {
    font-family: "Saira Stencil One", cursive;
    color: #fff;
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 28px;
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
    margin-bottom: 32px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
