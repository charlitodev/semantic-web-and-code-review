import React, { useState } from "react";

const NewReleases = ({ poster }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  console.log(poster);

  return (
    <div
      className="media__container__child"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card__container">
        <div
          className="img"
          style={{ backgroundImage: `url(${poster})`, backgroundSize: "cover" }}
        >
          <img
            src={poster}
            className={isHover ? "media__landscape__container__img" : "opacity"}
            alt=""
          />
        </div>
        <div className={isHover ? "card__onHover" : "card"}>
          <div className="card__header">
            <div>
              <i className="fa-solid fa-play"></i>
              <i className="fa-solid fa-check"></i>
              <i className="fa-regular fa-thumbs-up"></i>
            </div>
            <div>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className="card__details">
            <small className="MA">MA 15+</small>
            <small>16 episodes</small>
            <small className="HD">HD</small>
          </div>
          <div className="genres">
            <ul>
              <li>
                <small>Dark</small>
              </li>
              <li>
                <small>Drama</small>
              </li>
              <li>
                <small>Revenge</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReleases;
