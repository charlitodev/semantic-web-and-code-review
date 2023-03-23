import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <img
          style={{ width: "300px" }}
          src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png"
          alt=""
        />
        <p>No. 2 in Movies Today</p>
        <p className="movie__description">
          A space opera set “a long time ago in a galaxy far, far away,” the
          film centres on Luke Skywalker (played by the then relatively unknown
          Mark Hamill), a young man who finds himself embroiled in an
          interplanetary war between an authoritarian empire and rebel forces.
        </p>
        <div className="button__container">
          <button className="hero__play__button">
            <i className="fa-solid fa-play"></i> Play
          </button>
          <button className="hero__moreInfo__button">
            <i className="fa-solid fa-circle-info"></i> More info
          </button>
        </div>
      </div>
      <div className="rating__container">
        <i class="fa-solid fa-rotate-right"></i>
        <p>PG</p>
      </div>
    </div>
  );
};

export default Hero;
