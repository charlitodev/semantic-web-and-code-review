import React, { useState } from "react";

const RankingMedia = ({ poster }) => {
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
      <div>
        <img src={poster} alt="sample" />
      </div>
      <div className={`card__ranking ${isHovered && `card__ranking__hover`}`}>
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

export default RankingMedia;
