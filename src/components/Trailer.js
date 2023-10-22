import React from "react";
import { useParams } from "react-router-dom";
import MovieData from "./MovieData";
import "../App.css";

export default function Trailer() {
  const { movieId } = useParams();
  const movie = MovieData.find((el) => el.id === movieId);

  return (
    <div className="traicont">
      <h1 className="trai">{movie.Title}</h1>
      <h2 className="ktiba">
        <span className="trai2"> Description :</span> {movie.Filmdescription}
      </h2>
      <h2 className="trai2">Trailer :</h2>
      <iframe
        width="560"
        height="315"
        src={movie.Trailer}
        title={movie.Title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
