import styled from "styled-components";
import {
  IoMdExit,
  IoMdAddCircleOutline,
  IoMdRemoveCircleOutline,
} from "react-icons/io";

export default function MainScreen() {
  return (
    <MainScreenContainer>
      <header>
        <h2>Olá, Fulano</h2>
        <IoMdExit className="exit-icon" />
      </header>
      <MainContent>
        <p>Não há registros de entrada ou saída</p>
      </MainContent>
      <Entries>
        <Entry>
          <IoMdAddCircleOutline className="add-icon" />
          <p>Nova entrada</p>
        </Entry>
        <Entry>
          <IoMdRemoveCircleOutline className="add-icon" />
          <p>Nova saída</p>
        </Entry>
      </Entries>
    </MainScreenContainer>
  );
}

const MainScreenContainer = styled.div`
  width: 100%;
  padding: 25px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;

    h2 {
      color: #fff;
      font-size: 26px;
      font-weight: bold;
      line-height: 31px;
    }

    .exit-icon {
      color: #fff;
      font-size: 24px;
    }
  }
`;

const MainContent = styled.div`
  width: 100%;
  background-color: #fff;
  height: 446px;
  border-radius: 5px;
  position: relative;
  top: 0;
  left: 0;
  margin-bottom: 13px;

  p {
    height: 46px;
    width: 180px;
    text-align: center;
    font-size: 20px;
    line-height: 23px;
    position: absolute;
    top: calc(50% - 23px);
    left: calc(50% - 90px);
  }
`;

const Entries = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Entry = styled.div`
  width: 155px;
  height: 114px;
  position: relative;
  top: 0;
  left: 0;
  background-color: #a328d6;
  border-radius: 5px;

  .add-icon {
    font-size: 24px;
    color: #fff;
    position: absolute;
    top: 9px;
    left: 8px;
  }

  p {
    width: 64px;
    height: 40px;
    font-size: 17px;
    font-weight: bold;
    line-height: 20px;
    color: #fff;
    position: absolute;
    bottom: 9px;
    left: 10px;
  }
`;