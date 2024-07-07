import toast, { Toaster } from "react-hot-toast";
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

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://rickandmortyapi.com/api/characters")
      .then((res) => {
        if (!res.ok) throw new Error("someting went wrong !!");
        return res.json();
      })
      .then((data) => setCharacters(data.results))
      .catch((err) => toast.error(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app">
      <Toaster />
      <Navbar
        numOfResult={characters.length}
        searchValue={searchValue}
        onSearch={handleSearch}
      />

      <div className="main">
        <CharacterList
          characters={characters}
          searchValue={searchValue}
          isLoading={isLoading}
        />

        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
