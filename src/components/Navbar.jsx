import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ numOfResult,searchValue, onSearch, numOfFavourites }) {
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

      <button className="heart">
        <HeartIcon className="icon" />

        <span className="badge">{numOfFavourites}</span>
      </button>
    </nav>
  );
}

export default Navbar;
