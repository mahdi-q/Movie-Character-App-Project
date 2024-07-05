import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="app">
      <Navbar
        numOfResult={characters.length}
        searchValue={searchValue}
        onSearch={handleSearch}
      />

      <div className="main">
        <CharacterList characters={characters} searchValue={searchValue} />

        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
