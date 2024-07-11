import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${searchValue}`
        );
        setCharacters(res.data.results);
      } catch (err) {
        setCharacters([]);
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }

    if (searchValue.length < 3) {
      setCharacters([]);
      return;
    }

    fetchData();
  }, [searchValue]);

  return (
    <div className="app">
      <Toaster />
      <Navbar
        numOfResult={characters.length}
        searchValue={searchValue}
        onSearch={handleSearch}
      />

      <div className="main">
        <CharacterList characters={characters} isLoading={isLoading} />

        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
