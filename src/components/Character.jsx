import styled from "styled-components";
import ListItemStatus from "../ui/ListItemStatus";

const ListItem = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 4rem 1fr 2rem;
  grid-template-rows: 1fr 1fr;
  background-color: var(--slate-800);
  border-radius: 1rem;
  padding: 0.8rem;
  transition: all 0.2s ease-out;
  margin-right: 3px;

  &:hover {
    background-color: var(--slate-700);
  }
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const ListItemImage = styled.img`
  grid-column: 1/3;
  grid-row: 1/3;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
`;

const ListItemName = styled.h3`
  grid-column: 2/3;
  grid-row: 1/2;
  color: var(--slate-200);
`;

const ListItemInfo = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: center;
  color: var(--slate-200);
`;

function Character({ item, children }) {
  return (
    <ListItem>
      <ListItemImage src={item.image} alt={item.name} />

      <ListItemName>
        <span>{item.gender === "Male" ? "👱🏻‍♂️ " : "👱🏻‍♀️ "}</span>
        <span>{item.name}</span>
      </ListItemName>

      <ListItemInfo>
        <ListItemStatus
          color={
            item.status === "Dead"
              ? "red"
              : item.status === "Alive"
              ? "green"
              : ""
          }
        />

        <span>{` ${item.status} - ${item.species}`}</span>
      </ListItemInfo>

      {children}
    </ListItem>
  );
}
export default Character;
