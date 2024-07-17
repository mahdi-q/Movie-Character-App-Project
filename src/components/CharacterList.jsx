import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";

function CharacterList({
  characters,
  isLoading,
  onSelectedCharacter,
  selectedId,
}) {
  if (isLoading) {
    return (
      <div className="characters-list">
        <Loader />
      </div>
    );
  }

  return (
    <div className="characters-list">
      {characters.map((item) => (
        <Character
          key={item.id}
          item={item}
          onSelectedCharacter={onSelectedCharacter}
          selectedId={selectedId}
        />
      ))}
    </div>
  );
}

export default CharacterList;

function Character({ item, onSelectedCharacter, selectedId }) {
  return (
    <div className="list__item">
      <img src={item.image} alt={item.name} />

      <h3 className="name">
        <span>{item.gender === "Male" ? "👱🏻‍♂️ " : "👱🏻‍♀️ "}</span>
        <span>{item.name}</span>
      </h3>

      <div className="list-item__info info">
        <span
          className={`status ${item.status === "Dead" ? "red" : ""}`}
        ></span>
        <span>{` ${item.status} - ${item.species}`}</span>
      </div>

      <button className="icon red" onClick={() => onSelectedCharacter(item.id)}>
        {selectedId === item.id ? <EyeSlashIcon /> : <EyeIcon />}
      </button>
    </div>
  );
}
