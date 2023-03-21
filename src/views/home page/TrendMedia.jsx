import React, { useState } from "react";

const TrendMedia = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      className={`item ${isHovered && `card__hover`}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="img">
        <img
          className={`${isHovered && `card__hover`}`}
          src="https://preview.redd.it/atyf1poo8oe31.jpg?auto=webp&s=d28749798085f4b4947e99c167dc3b2ab1f04e30"
          alt="sample"
        />
      </div>
      <div className={`card ${isHovered && `card__hover`}`}>
        <div className="header__cta">
          <div>
            <i className="fa-regular fa-circle-play"></i>
            <i className="fa-solid fa-caret-down"></i>
            <i className="fa-solid fa-thumbs-up"></i>
          </div>

          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="info">
          <div className="match">
            <small>MA +15</small>
          </div>
          <div className="age">
            <small>16 episodes</small>
          </div>
        </div>
        <div className="tags">
          <span>
            <small>Dark</small>
          </span>
          <span>
            <small>Drama</small>
          </span>
          <span>
            <small>Revenge</small>
          </span>
        </div>
      </div>
    </li>
  );
};

export default TrendMedia;
