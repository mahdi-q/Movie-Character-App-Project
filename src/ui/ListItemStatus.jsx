import styled from "styled-components";

const ListItemStatus = styled.span`
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.color === "red"
      ? "var(--rose-600)"
      : props.color === "green"
      ? "var(--green-600)"
      : "#000"};
`;

export default ListItemStatus;
