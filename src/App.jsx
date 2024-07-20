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
  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem("Favourites")) || []
  );

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

  const handleDeleteFavourite = (id) => {
    setFavourites((prevFav) => prevFav.filter((fav) => fav.id !== id));
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
        setCharacters(res.data.results.slice(0, 6));
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

  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div className="app">
      <Toaster />
      <Navbar
        numOfResult={characters.length}
        searchValue={searchValue}
        onSearch={handleSearch}
        favourites={favourites}
        onDeleteFavourite={handleDeleteFavourite}
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
