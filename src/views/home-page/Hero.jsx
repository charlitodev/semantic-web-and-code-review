import React from "react";
import { rankingPosters } from "../../configs/mediaData";
import { Navbar } from "../../components";

const Hero = () => {
  const activeData = rankingPosters[1];

  const { title, mediaPoster, mediaDescription, posterTitleLogo } = activeData;

  return (
    <div className="hero">
      <Navbar />
      <div className="hero__container">
        <div className="hero__right__panel">
          <img
            src="https://www.themoviedb.org/t/p/original/urnTUat3LQZFSxE8wRN1Lh7qfTq.png"
            alt=""
          />
          <p>
            <b>No. 5 in Movies Today</b>
          </p>
          <p>{mediaDescription}</p>
          <div className="hero__cta">
            <button className="cta__play">
              <i className="fa-solid fa-play"></i> Play
            </button>
            <button className="cta__more__info">
              <i className="fa-solid fa-info"></i> More info
            </button>
          </div>
        </div>
        <div className="hero__left__panel">
          <i className="fa-solid fa-rotate-right"></i>
          <span>PG</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
