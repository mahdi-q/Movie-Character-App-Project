import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import { character, episodes } from "../../data/data";

function CharacterDetail() {
  return (
    <div style={{ flex: 1 }}>
      <CharacterInfo />
      <CharacterEpisodes />
    </div>
  );
}

export default CharacterDetail;

function CharacterInfo() {
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

function CharacterEpisodes() {
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
