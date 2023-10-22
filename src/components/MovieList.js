import React from "react";
import MovieCard from "./MovieCards";
import "../App.css";
import { Link } from "react-router-dom";

export default function MovieList({ movielist, searchTitle, searchRating }) {
  return (
    <div className="bodyy">
      <div className="movieListContainer">
        {movielist
          .filter(
            (el) =>
              el.Title.toLowerCase().includes(
                searchTitle.toLowerCase().trim()
              ) && el.Rating >= searchRating
          )
          .map((el, key) => (
            <Link to={`/movie/${el.id}`} key={el.id}>
              <MovieCard key={el.id} movie={el} />
            </Link>
          ))}
      </div>
    </div>
  );
}
