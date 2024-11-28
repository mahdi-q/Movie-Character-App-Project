import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";
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

function CharacterDetail({
  selectedId,
  characters,
  onAddFavourite,
  isAddedToFavourites,
}) {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
        setCharacter(data);

        const episodesId = data.episode.map((e) => e.split("/").at(-1));
        const { data: episodesData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesId}`
        );
        setEpisodes([episodesData].flat());
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    if (selectedId) fetchData();
  }, [selectedId]);

  if (isLoading)
    return (
      <div style={{ flex: 1 }}>
        <Loader />
      </div>
    );

  if (characters.length === 0 && (!character || !selectedId))
    return (
      <div style={{ flex: 1, color: "var(--slate-300)" }}>
        Please search a character .
      </div>
    );

  if ((!character || !selectedId) && characters.length !== 0)
    return (
      <div style={{ flex: 1, color: "var(--slate-300)" }}>
        Please selecte a character .
      </div>
    );

  return (
    <div style={{ flex: 1 }}>
      <CharacterInfo
        character={character}
        onAddFavourite={onAddFavourite}
        isAddedToFavourites={isAddedToFavourites}
      />
      <CharacterEpisodes episodes={episodes} />
    </div>
  );
}

export default CharacterDetail;

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

function CharacterEpisodes({ episodes }) {
  const [sortBy, setSortBy] = useState(true);

  let sortedEpisodes;

  if (sortBy) {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );
  } else {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(b.created) - new Date(a.created)
    );
  }

  return (
    <div className="character-episodes">
      <div className="title">
        <h2>List of Episodes:</h2>
        <button onClick={() => setSortBy((is) => !is)}>
          <ArrowUpCircleIcon
            className="icon"
            style={{ rotate: sortBy ? "0deg" : "180deg" }}
          />
        </button>
      </div>

      <ul>
        {sortedEpisodes.map((item, index) => (
          <li key={item.id}>
            <div>
              <span>
                {String(index + 1).padStart(2, 0)} - {item.episode} :
              </span>
              <strong> {item.name}</strong>
            </div>

            <div className="badge badge--secondary">{item.air_date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
