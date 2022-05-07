import { useState, useContext } from "react";
import styled from "styled-components";

import UserInfoContext from "../context/UserInfoContext";

export default function NewEntry() {
  const [entryInfo, setEntryInfo] = useState({});

  const { userInfo, entryType } = useContext(UserInfoContext);

  function updateEntryInfo(event) {
    const { name, value } = event.target;
    setEntryInfo((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <NewEntryContainer>
      <h2>Nova {entryType === "credit" ? "entrada" : "saída"}</h2>
      <StyledForm>
        <input
          type="number"
          name="value"
          placeholder="Valor"
          onChange={updateEntryInfo}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          onChange={updateEntryInfo}
          required
        />
        <button type="submit">
          Salvar {entryType === "credit" ? "entrada" : "saída"}
        </button>
      </StyledForm>
    </NewEntryContainer>
  );
}

const NewEntryContainer = styled.div`
  width: 100%;
  padding: 25px;

  h2 {
    font-size: 26px;
    line-height: 31px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 40px;
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
