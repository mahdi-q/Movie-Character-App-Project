import { Toaster } from "react-hot-toast";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import { useState } from "react";
import useCharacters from "./hooks/useCharacters";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem("Favourites")) || []
  );

  const { characters, isLoading } = useCharacters(searchValue);

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
