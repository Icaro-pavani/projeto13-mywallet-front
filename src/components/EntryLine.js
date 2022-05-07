import styled from "styled-components";

export default function EntryLine({ entry }) {
  return (
    <StyledList>
      <p className="description">
        <span>{entry.date}</span> {entry.description}
      </p>
      <p className={`value ${entry.type}`}>
        {entry.value.toFixed(2).replace(".", ",")} <span>x</span>
      </p>
    </StyledList>
  );
}

const StyledList = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .description {
    width: auto;
    height: auto;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    color: #000;
  }

  .value {
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${(props) => (props.type === "credit" ? "#03ac00" : "#c70000")};
  }

  .credit {
    color: #03ac00;
  }

  .debit {
    color: #c70000;
  }

  span {
    color: #c6c6c6;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
