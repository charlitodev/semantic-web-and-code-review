import React from "react";
import { mediaData } from "../../configs/indexData";
import TrendMedia from "./TrendMedia";

const PopularMedia = () => {
  return (
    <section>
      <h2>Popular in Netflix</h2>
      <ul>
        {mediaData.map((item) => {
          return <TrendMedia key={item.id} poster={item.mediaPoster} />;
        })}
      </ul>
    </section>
  );
};

export default PopularMedia;
