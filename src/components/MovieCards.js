import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function MovieCard({ movie }) {
  console.log(movie);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={movie.PosterURL}
        alt={movie.Title}
        className="image"
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          Description :{movie.Description} <br /> Rate : {movie.Rating}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
