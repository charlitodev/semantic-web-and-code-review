import React from "react";
import { rankingPosters } from "../../configs/indexData";
import TrendMedia from "./TrendMedia";

const PopularMedia = () => {
  return (
    <section>
      <h2>Popular in Netflix</h2>
      <ul>
        {rankingPosters.map((item) => {
          return <TrendMedia key={item.id} poster={item.mediaPoster} />;
        })}
      </ul>
    </section>
  );
};

export default PopularMedia;
