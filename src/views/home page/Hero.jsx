import React from "react";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(to top, rgb(20, 20, 20) 0%, transparent 100%), url(https://preview.redd.it/atyf1poo8oe31.jpg?auto=webp&s=d28749798085f4b4947e99c167dc3b2ab1f04e30)`,
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="hero__container">
        <h1>Downtown Abbey</h1>
        <p>No. 5 in Movies Today</p>
        <p className="movie__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
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
    </div>
  );
};

export default Hero;
