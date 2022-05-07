import styled from "styled-components";

export default function EntryLine({ entry }) {
  return (
    <StyledList>
      <p className="description">
        <span>{entry.date}</span> {entry.description}
      </p>
      <p className="value">
        {entry.value} <span>x</span>
      </p>
    </StyledList>
  );
}

const StyledList = styled.li`
  width: 100%;
`;
