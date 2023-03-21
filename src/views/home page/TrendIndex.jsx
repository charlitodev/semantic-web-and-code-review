import React from "react";
import TrendMedia from "./TrendMedia";
import { movieData } from "../../data/indexData";

const TrendIndex = () => {
  return (
    <section className="new__release">
      <h2>New Releases</h2>
      <ul>
        {movieData.map((item) => {
          return <TrendMedia key={item.id} />;
        })}
      </ul>
    </section>
  );
};

export default TrendIndex;
