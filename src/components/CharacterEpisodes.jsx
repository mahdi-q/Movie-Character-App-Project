import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import styled from "styled-components";
import Badge from "../ui/Badge";

const CharacterEpisodesContainer = styled.div`
  background-color: var(--slate-800);
  border-radius: 1rem;
  padding: 1rem;
  max-height: 387px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    opacity: 0;
    visibility: hidden;
    border-radius: 1rem;
    background-color: #9ca3af;
  }
  &:hover::-webkit-scrollbar-thumb {
    opacity: 1;
    visibility: visible;
  }
`;

const CharacterEpisodesTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: var(--slate-400);
    margin-bottom: 0.6rem;
  }

  & > button > .icon {
    width: 2rem;
    height: 2rem;
    transition: all 0.3s ease-in-out;
    color: var(--slate-300);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CharacterEpisodesItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--slate-200);
  padding: 0.5rem 0;
`;

function CharacterEpisodes({ episodes }) {
  const [sortBy, setSortBy] = useState(true);

  let sortedEpisodes;

  if (sortBy) {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );
  } else {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(b.created) - new Date(a.created)
    );
  }

  return (
    <CharacterEpisodesContainer>
      <CharacterEpisodesTitle>
        <h2>List of Episodes:</h2>

        <button onClick={() => setSortBy((is) => !is)}>
          <ArrowUpCircleIcon
            className="icon"
            style={{ rotate: sortBy ? "0deg" : "180deg" }}
          />
        </button>
      </CharacterEpisodesTitle>

      <ul>
        {sortedEpisodes.map((item, index) => (
          <CharacterEpisodesItem key={item.id}>
            <div>
              <span>
                {String(index + 1).padStart(2, 0)} - {item.episode} :
              </span>
              <strong> {item.name}</strong>
            </div>

            <Badge varient="secondary">{item.air_date}</Badge>
          </CharacterEpisodesItem>
        ))}
      </ul>
    </CharacterEpisodesContainer>
  );
}
export default CharacterEpisodes;
