import React from "react";
import NewReleases from "./NewReleases";
import PopularMedia from "./PopularMedia";
import { rankingPosters } from "../../configs/mediaData";

const MediaContainer = () => {
  return (
    <div className="media__container__parent">
      <div className="absolute">
        <h3>New Release</h3>
        <div className="media__container">
          {rankingPosters.map((item) => {
            return <NewReleases key={item.id} poster={item.mediaPoster} />;
          })}
        </div>
      </div>

      <h3 style={{ marginTop: "4em" }}>Top 10 TV Shows in Australia Today</h3>
      <div className="media__container" style={{ paddingLeft: "5em" }}>
        {rankingPosters.map((item) => {
          return (
            <PopularMedia
              key={item.id}
              poster={item.mediaPoster}
              ranking={item.id}
            />
          );
        })}
      </div>

      <h3>Top 10 Movie Shows in Australia Today</h3>
      <div className="media__container" style={{ paddingLeft: "5em" }}>
        {rankingPosters.map((item) => {
          return (
            <PopularMedia
              key={item.id}
              poster={item.mediaPoster}
              ranking={item.id}
            />
          );
        })}
      </div>

      <h3 style={{ marginTop: "4em" }}>Popular on Netflix</h3>
      <div className="media__container">
        {rankingPosters.map((item) => {
          return <NewReleases key={item.id} poster={item.mediaPoster} />;
        })}
      </div>
    </div>
  );
};

export default MediaContainer;
