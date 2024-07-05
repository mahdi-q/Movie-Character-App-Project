import { EyeIcon } from "@heroicons/react/24/outline";

function CharacterList({ characters, searchValue }) {
  let filteredCharacters = [];

  if (searchValue === "") {
    filteredCharacters = characters;
  } else {
    filteredCharacters = characters.filter((chareacter) => 
       chareacter.name
        .trim()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase())
    );
  }

  return (
    <div className="characters-list">
      {filteredCharacters.map((item) => (
        <Character key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CharacterList;

function Character({ item }) {
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
      
      <button className="icon red">
        <EyeIcon />
      </button>
    </div>
  );
}
