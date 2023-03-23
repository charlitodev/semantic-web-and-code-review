import React from "react";
import TrendMedia from "./TrendMedia";
import { mediaData } from "../../configs/indexData";

const TrendIndex = () => {
  return (
    <section className="new__release">
      <h2>New Releases</h2>
      <ul>
        {mediaData.map((item) => {
          return (
            <TrendMedia
              key={item.id}
              poster={item.mediaPoster}
              isNetflixShow={item.isNetflixShow}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TrendIndex;
