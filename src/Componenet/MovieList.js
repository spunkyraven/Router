import React from "react";
import Cardd from "./Cardd";

function MovieList({ tabmovies, abc, rate }) {
  return (
    <div className="movielist">
      {tabmovies
        .filter((el) => el.title.toUpperCase().includes(abc.toUpperCase()))
        .filter((el) => el.rating >= rate)
        .map((elcard) => (
          <Cardd elcard={elcard} />
        ))}
    </div>
  );
}

export default MovieList;
