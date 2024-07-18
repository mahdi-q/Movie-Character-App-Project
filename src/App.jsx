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
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleSelectedCharacter = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleAddFavourite = (char) => {
    setFavourites((prevFav) => [...prevFav, char]);
  };

  const isAddedToFavourites = favourites
    .map((fav) => fav.id)
    .includes(selectedId);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${searchValue}`,
          { cancelToken: source.token }
        );
        setCharacters(res.data.results.slice(0, 3));
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("successfully aborted");
        } else {
          setCharacters([]);
          toast.error(err.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (searchValue.length < 3) {
      setCharacters([]);
      return;
    }

    fetchData();

    return () => {
      source.cancel();
    };
  }, [searchValue]);

  return (
    <div className="app">
      <Toaster />
      <Navbar
        numOfResult={characters.length}
        searchValue={searchValue}
        onSearch={handleSearch}
        numOfFavourites={favourites.length}
      />

      <div className="main">
        <CharacterList
          characters={characters}
          isLoading={isLoading}
          onSelectedCharacter={handleSelectedCharacter}
          selectedId={selectedId}
        />

        <CharacterDetail
          selectedId={selectedId}
          characters={characters}
          onAddFavourite={handleAddFavourite}
          isAddedToFavourites={isAddedToFavourites}
        />
      </div>
    </div>
  );
}

export default App;
