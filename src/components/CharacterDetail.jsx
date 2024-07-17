import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";

function CharacterDetail({ selectedId, characters }) {
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
      <CharacterInfo character={character} />
      <CharacterEpisodes episodes={episodes} />
    </div>
  );
}

export default CharacterDetail;

function CharacterInfo({ character }) {
  return (
    <div className="character-info">
      <img
        src={character.image}
        alt={character.name}
        className="character-info__img"
      />

      <div className="character-info__info">
        <h3 className="name">
          <span>{character.gender === "Male" ? "👱🏻‍♂️ " : "👱🏻‍♀️ "}</span>
          <span>{character.name}</span>
        </h3>

        <div className="info">
          <span
            className={`status ${character.status === "Dead" ? "red" : ""}`}
          ></span>
          <span>{` ${character.status} - ${character.species}`}</span>
        </div>

        <div className="location">
          <p>Last known location:</p>
          <p>{character.location.name}</p>
        </div>

        <div className="actions">
          <button className="btn btn--primary">Add To Favorite</button>
        </div>
      </div>
    </div>
  );
}

function CharacterEpisodes({ episodes }) {
  return (
    <div className="character-episodes">
      <div className="title">
        <h2>List of Episodes:</h2>
        <button className="icon">
          <ArrowUpCircleIcon />
        </button>
      </div>

      <ul>
        {episodes.map((item, index) => (
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
