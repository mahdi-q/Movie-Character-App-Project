import styled from "styled-components";
import ListItemStatus from "../ui/ListItemStatus";
import Button from "../ui/Button";

const CharacterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--slate-800);
  overflow: hidden;
  border-radius: 0.5rem;
  margin-bottom: 2rem;

  & > :last-child {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CharacterInfoImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 15rem;
  object-fit: cover;
  object-position: center;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const CharacterInfoName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
  color: var(--slate-200);
`;

const CharacterInfoDetail = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: var(--slate-200);
`;

const CharacterInfoLocation = styled.div`
  color: var(--slate-500);
  margin-bottom: 1rem;

  & > :last-child {
    margin-top: 0.2rem;
    color: var(--slate-300);
    font-weight: 700;
  }
`;

const CharacterInfoAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: var(--slate-400);
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

function CharacterInfo({ character, onAddFavourite, isAddedToFavourites }) {
  return (
    <CharacterInfoContainer>
      <CharacterInfoImage src={character.image} alt={character.name} />

      <div>
        <CharacterInfoName>
          <span>{character.gender === "Male" ? "👱🏻‍♂️ " : "👱🏻‍♀️ "}</span>
          <span>{character.name}</span>
        </CharacterInfoName>

        <CharacterInfoDetail>
          <ListItemStatus
            color={
              character.status === "Dead"
                ? "red"
                : character.status === "Alive"
                ? "green"
                : ""
            }
          />
          <span>{` ${character.status} - ${character.species}`}</span>
        </CharacterInfoDetail>

        <CharacterInfoLocation>
          <p>Last known location:</p>
          <p>{character.location.name}</p>
        </CharacterInfoLocation>

        <CharacterInfoAction>
          {isAddedToFavourites ? (
            <p>Already added to favourites ✔</p>
          ) : (
            <Button varient="primary" onClick={() => onAddFavourite(character)}>
              Add To Favorite
            </Button>
          )}
        </CharacterInfoAction>
      </div>
    </CharacterInfoContainer>
  );
}
export default CharacterInfo;
