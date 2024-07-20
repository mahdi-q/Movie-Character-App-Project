import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";
import { Character } from "./CharacterList";

function Navbar({
  numOfResult,
  searchValue,
  onSearch,
  favourites,
  onDeleteFavourite,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <span className="navbar__logo">Logo 😍</span>

      <input
        type="text"
        className="text-field"
        onChange={(e) => onSearch(e)}
        placeholder="Search ..."
        value={searchValue}
      />

      <div className="navbar__result">
        Found <strong>{numOfResult}</strong> Result
      </div>

      <Modal title={"List Of Favourites"} open={isOpen} onOpen={setIsOpen}>
        {favourites.map((item) => (
          <Character key={item.id} item={item}>
            <button
              className="icon red"
              onClick={() => onDeleteFavourite(item.id)}
            >
              <TrashIcon />
            </button>
          </Character>
        ))}
      </Modal>

      <button className="heart" onClick={() => setIsOpen((is) => !is)}>
        <HeartIcon className="icon" />

        <span className="badge">{favourites.length}</span>
      </button>
    </nav>
  );
}

export default Navbar;
