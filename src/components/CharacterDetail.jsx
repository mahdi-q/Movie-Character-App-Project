import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";
import CharacterInfo from "./CharacterInfo";
import CharacterEpisodes from "./CharacterEpisodes";

function CharacterDetail({
  selectedId,
  characters,
  onAddFavourite,
  isAddedToFavourites,
}) {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
        setCharacter(data);

        const episodesId = data.episode.map((e) => e.split("/").at(-1));
        const { data: episodesData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesId}`
        );
        setEpisodes([episodesData].flat());
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    if (selectedId) fetchData();
  }, [selectedId]);

  if (isLoading)
    return (
      <div style={{ flex: 1 }}>
        <Loader />
      </div>
    );

  if (characters.length === 0 && (!character || !selectedId))
    return (
      <div style={{ flex: 1, color: "var(--slate-300)" }}>
        Please search a character .
      </div>
    );

  if ((!character || !selectedId) && characters.length !== 0)
    return (
      <div style={{ flex: 1, color: "var(--slate-300)" }}>
        Please selecte a character .
      </div>
    );

  return (
    <div style={{ flex: 1 }}>
      <CharacterInfo
        character={character}
        onAddFavourite={onAddFavourite}
        isAddedToFavourites={isAddedToFavourites}
      />
      <CharacterEpisodes episodes={episodes} />
    </div>
  );
}
export default CharacterDetail;
