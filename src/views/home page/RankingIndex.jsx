import React from "react";
import RankingMedia from "./RankingMedia";
import { movieData } from "../../data/indexData";

const RankingIndex = () => {
  return (
    <>
      <section className="ranking__section">
        <h2>Top 10 Movies in Australia Today</h2>
        <ul>
          {movieData.map((item) => {
            return (
              <div key={item.id} className="ranking__container">
                <h1>{item.id}</h1>
                <RankingMedia />
              </div>
            );
          })}
        </ul>
      </section>
      <section className="ranking__section">
        <h2>Top 10 Tv Shows in Australia Today</h2>
        <ul>
          {movieData.map((item) => {
            return (
              <div key={item.id} className="ranking__container">
                <h1>{item.id}</h1>
                <RankingMedia />
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default RankingIndex;
