import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__logo">Logo 😍</span>

      <input type="text" className="text-field" placeholder="Search ..." />

      <div className="navbar__result">Found X Result</div>

      <button className="heart">
        <HeartIcon className="icon" />

        <span className="badge">3</span>
      </button>
    </nav>
  );
}

export default Navbar;