import React from "react";
import RankingMedia from "./RankingMedia";
import { mediaData } from "../../configs/indexData";

const RankingIndex = () => {
  return (
    <>
      <section className="ranking__section">
        <h2>Top 10 Movies in Australia Today</h2>
        <ul>
          {mediaData.map((item) => {
            return (
              <div key={item.id} className="ranking__container">
                <h1>{item.id}</h1>
                <RankingMedia poster={item.mediaPoster} />
              </div>
            );
          })}
        </ul>
      </section>
      <section className="ranking__section">
        <h2>Top 10 Tv Shows in Australia Today</h2>
        <ul>
          {mediaData.map((item) => {
            return (
              <div key={item.id} className="ranking__container">
                <h1>{item.id}</h1>
                <RankingMedia poster={item.mediaPoster} />
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default RankingIndex;
