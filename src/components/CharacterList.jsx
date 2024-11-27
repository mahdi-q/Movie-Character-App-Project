import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";
import styled from "styled-components";
import ButtonIcon from "../ui/ButtonIcon";

const CharacterListContainer = styled.div`
  width: 45%;
  max-height: 660px;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    opacity: 0;
    visibility: hidden;
    border-radius: 5px;
    background-color: #9ca3af;
  }
  &:hover::-webkit-scrollbar-thumb {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const ListItem = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 4rem 1fr 2rem;
  grid-template-rows: 1fr 1fr;
  background-color: var(--slate-800);
  border-radius: 1rem;
  padding: 0.8rem;
  cursor: pointer;
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

function CharacterList({
  characters,
  isLoading,
  onSelectedCharacter,
  selectedId,
}) {
  if (isLoading) {
    return (
      <CharacterListContainer>
        <Loader />
      </CharacterListContainer>
    );
  }

  return (
    <CharacterListContainer>
      {characters.map((item) => (
        <Character key={item.id} item={item}>
          <ButtonIcon onClick={() => onSelectedCharacter(item.id)}>
            {selectedId === item.id ? <EyeSlashIcon /> : <EyeIcon />}
          </ButtonIcon>
        </Character>
      ))}
    </CharacterListContainer>
  );
}

export default CharacterList;

export function Character({ item, children }) {
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
