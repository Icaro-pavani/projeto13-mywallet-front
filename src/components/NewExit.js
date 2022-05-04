import styled from "styled-components";

export default function NewExit() {
  return (
    <NewExitContainer>
      <h2>Nova Saída</h2>
      <StyledForm>
        <input type="text" placeholder="Valor" required />
        <input type="text" placeholder="Descrição" required />
        <button type="submit">Salvar Saída</button>
      </StyledForm>
    </NewExitContainer>
  );
}

const NewExitContainer = styled.div`
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
