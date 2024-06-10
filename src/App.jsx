import "./App.css";
import { allCharacters } from "../data/data";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="main">
        <CharacterList characters={allCharacters} />

        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
