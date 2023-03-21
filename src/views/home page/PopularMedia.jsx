import React from "react";
import { movieData } from "../../data/indexData";
import TrendMedia from "./TrendMedia";

const PopularMedia = () => {
  return (
    <section>
      <h2>Popular in Netflix</h2>
      <ul>
        {movieData.map((item) => {
          return <TrendMedia key={item.id} />;
        })}
      </ul>
    </section>
  );
};

export default PopularMedia;
