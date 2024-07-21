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
      <span className="navbar__logo">
        <svg  width={"40px"} height={"40px"} viewBox="0 0 698.2 725.21">
          <path d="M595.95,595.95c65.93-65.93,102.25-153.6,102.25-246.85s-36.32-180.91-102.25-246.84C530.01,36.32,442.35,0,349.1,0S168.19,36.32,102.25,102.26,0,255.86,0,349.1s36.32,180.92,102.25,246.85c6.99,6.98,14.22,13.64,21.68,19.95-3.27,12-5.18,24.23-2.5,35.93,1,4.38,.79,8.94,6.72,9.79,2.61,.37,8.72,6.47,10.89,7.89,101.36,66.73,239.39,66.16,353.26,36.55,24.59-6.39,47.58-15.53,70.53-26.15,6.08-2.82,7.64-6.98,8.44-12.29,.33-2.2,.43-4.46,.42-6.72-5.82-8.93-9.13-20.31-9.13-30.25,0-1.8,.12-3.64,.32-5.49,11.53-8.96,22.58-18.7,33.08-29.2Zm-392.45,30.53c-.81,.88-1.78,1.61-2.84,2.56-.13-.71-.36-1.14-.23-1.31,5.78-8.39,5.57-8.1-2.84-14.85-6.47-5.19-12.45-11.03-18.27-16.96-1.38-1.39-2.3-4.58-1.7-6.36,10.19-30.52,20.81-60.88,36.46-89.16,.26-.47,.59-.88,.9-1.32,.3,.19,.6,.38,.9,.56-3.46,7.21-7.36,14.26-10.31,21.68-8.67,21.84-16.9,43.85-25.51,65.73-1.65,4.19-.63,7.07,2.5,9.76,6.72,5.77,13.43,11.57,20.14,17.36q6.78,5.83,.79,12.32Zm13.04-11.33c-.5-.01-1-.02-1.5-.04l2.92-104.57c.72-.03,1.45-.08,2.18-.11l-3.6,104.73Zm17.69-290.36c-.4,1.16-3.53,2.1-5.28,1.91-7.85-.88-15.65-2.19-23.21-3.32-8.59,1.17-16.78,2.45-24.99,3.25-1.53,.14-4.25-1.26-4.72-2.56-6.11-16.99,3.58-35.64,20.5-40,20.52-5.3,38.89,7.7,39.93,28.91,.2,3.92-.91,8.05-2.23,11.8Zm23.46-2.68c-4.22,.18-5.71-1.34-5.28-5.41,.24-2.19,.2-4.44,.02-6.65-.9-11.44,5.37-13.72,13.57-14.67,2.37-.27,4.79-.3,7.18-.36,13.32-.29,25.33,3.95,36.16,11.67,6,4.28,6.9,15.93,1.38,20.75-.62,.55-2,.65-2.87,.39-16.4-4.8-33.17-6.46-50.17-5.72Zm22.22,191.59c7.6,27.78,8.87,59.54,10.26,91.28l-10.26-91.28Zm51.37,148.46c.59-2.82,.67-4.44,1.28-5.84,1.94-4.46-.3-7.31-3.4-10.03-7.64-6.71-15.27-13.43-22.81-20.24-5.71-5.17-5.64-6.48,.09-11.76,5.98-5.51,11.82-11.17,18-16.45,3.79-3.24,4.68-6.77,2.72-11.18-8.38-18.93-16.34-38.05-25.37-56.67-5-10.32-11.81-19.77-17.8-29.61,.45-.35,.88-.69,1.31-1.04,6.69,10.52,14.35,20.57,19.86,31.68,8.86,17.88,16.21,36.53,24.44,54.74,2.44,5.41,1.18,9.42-2.94,13.16-5.47,4.95-10.65,10.22-16.25,15.01-6.36,5.44-6.51,6.8-.38,12.34,6.59,5.95,13.15,11.92,19.62,18,6.68,6.27,6.91,8.38,1.64,17.89Zm164.86-170.24c-10.81-14.73-10.12-28.13,.35-43.91,1.78-2.69,4.03-5.09,6.62-8.32,1.28,10.41,7.27,15.34,15.76,18.05,15.43,4.9,31.24,7.19,47.37,6.46,5.63-.27,6.77,2.19,6.27,6.86-2.57,23.82-20.87,37.13-40.42,37.77-15,.5-27.2-4.99-35.95-16.91Zm45.82,94.34c1.3-.98,2.1-1.65,2.97-2.24,12.4-8.33,23.31-18.26,31.4-30.88,2.95-4.6,6.22-7.44,11.61-9.12,14.76-4.59,24.07-26.44,10.3-37.71-.95-.77-1.79-2.59-1.58-3.72,9.96-51.52,1.6-105.66-41.05-141.07-32.43-26.94-77.54-32.9-117.13-20.13-42.6,13.74-70.56,45.41-84.19,87.17-5.34,16.4-15.21,39.46-5.5,55.89,3.73,6.31,7.57,12.57,11.32,18.78-13.2,12.57-15.21,20.99-7.98,32.58,4.85,7.78,16.23,12.91,23.32,10.47-1.34-3.37-2.77-6.71-3.99-10.13-1.16-3.25-2.09-6.58-3.13-9.89,23.06,57.62,69.64,74.58,126.36,74.65-28.2,3.06-55.05-2.85-80.65-12.96-22.96,28.7-26.29,62.89-28.95,97.22-.06,.65-.11,1.28-.16,1.93-.18-.62-.35-1.24-.51-1.86-1.93-7.08-3.32-14.03-5.08-20.87-7.86-30.56-15.66-61.15-23.87-91.62-5.24-19.47-11.07-38.78-16.88-58.09-.65-2.15-2.59-4.99-4.49-5.52-17.29-4.79-34.7-9.06-52.05-13.66-3.13-.82-6.78-1.8-6.22-6.38,.5-4.11-1.98-8.85,5.21-10.79,10.57-2.84,18.9-9.55,25.23-18.81,1.87-2.74,5.33-4.87,8.52-6.11,6.55-2.55,13.39-4.32,20.76-6.6-4.16-5.24-7.85-9.57-11.14-14.17-1.39-1.94-1.96-4.46-2.91-6.72,2.28-.89,4.5-2.15,6.87-2.62,6.19-1.24,12.45-2.12,19.03-3.2l-9.83-27.18c13.82-4.5,27.02-8.68,39.23-17.49-7.37-4.01-14.17-7.23-20.45-11.24-6.37-4.07-12.21-8.94-19.54-14.4,23.89-8.07,45.95-15.24,64.84-30.85l-48.16-20.24,45.4-42.46-58.28-9.1,34.33-58.72-.97-.83-55.36,20.1c-6.87-23.89-8.63-47.4-6.21-71.75-1.76,.47-3.05,.6-4.14,1.15-21.82,10.92-41.5,24.58-56.37,45.53-14.23-18.81-26.84-37.87-44.71-53.27-2.49,23.1-4.69,45.39-15.88,66.13-16.89-10.54-34.9-16.97-55.64-19.34,10.92,18.05,17.16,36.42,19.05,56.42l-72.71,5.62c.61,1.15,.78,1.7,1.14,2.08,.87,.95,1.81,1.84,2.77,2.69,13.27,11.88,25.85,24.29,34.56,40.15,5.47,9.96,1.22,11.34-7.2,17.27-12.01,8.43-28.77,16.71-38.24,27.64,1.83,.87,4.28,1.75,6.39,1.75,7.77,1.26,57.03,22.91,46.55,32.89-9.51,9.05-18.76,18.36-28.03,27.65-1.04,1.02-1.59,2.53-2.45,3.93,12.6,4.07,24.36,8.27,36.35,11.57,5.21,1.42,5.71,3.28,4.32,8.04-3.07,10.51-5.44,21.22-8.29,32.61,10.94-.83,21.2-1.31,31.36-2.55,3.74-.46,4.4,.42,4.61,3.79,.49,7.72,1.39,15.4,2.18,23.75l19.08-7.99c-26.83-38.13-32.01-81.12-32.09-125.09,.6,6.81,1.39,13.63,1.75,20.45,1.43,27.06,7.63,52.98,17.76,78.09,8.18,20.27,21.3,35.1,43.11,40.77,3.75,.98,3.76,3.53,3.65,6.39-.12,3.03,.63,6-3.79,7.41-19.61,6.3-39.11,12.88-58.53,19.72-2.24,.79-4.69,3.48-5.38,5.8-6.79,22.83-13.35,45.75-20.07,68.6-1.76,5.96-3.93,12.18-6.01,18.55C56.24,542.08,11.13,450.75,11.13,349.1,11.13,162.74,162.74,11.13,349.1,11.13s337.97,151.61,337.97,337.97c0,107.04-50.02,202.62-127.91,264.58-3.74-9.96-8.9-19.32-17.2-27.42Zm-72.15-104.66c-4.24,15.75-15.32,25.7-31.9,28.28-21.95,3.43-41.21-7.63-47.83-27.15-.35-1.04-.72-2.08-.89-3.15-2.33-14.6-2.15-14.33,12.22-15.34,11.31-.8,22.66-2.25,33.73-4.59,10.35-2.2,19.91-6.46,20.22-20.54,14.77,11.82,18.76,26.42,14.44,42.49Z" />
        </svg>
      </span>

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
