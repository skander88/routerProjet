import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { v4 as uuidv4 } from "uuid";

export default function Add({ handleSubmit }) {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [PosterURL, setPosterURL] = useState("");
  const [Rating, setRating] = useState(0);

  return (
    <div>
      <div className="form">
        <div className="Add">
          <h1 className="h11">Add Movies</h1>
        </div>
        <div className="subtitle" className="h11">
          Let's add new movies!
        </div>
        <div className="input-container ic1">
          <input
            id="Title"
            className="input"
            type="text"
            placeholder="Title of the movie"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="cut" />
          <label htmlFor="Title" className="placeholder">
            Title :
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="Description"
            className="input"
            type="text"
            placeholder="description of the film : "
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="cut" />
          <label htmlFor="Description" className="placeholder">
            Description :
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="PosterURL"
            className="input"
            type="text"
            placeholder="film poster url : "
            value={PosterURL}
            onChange={(e) => setPosterURL(e.target.value)}
          />
          <div className="cut cut-short" />
          <label htmlFor="PosterURL" className="placeholder">
            PosterURL :
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="Rating"
            className="input"
            type="number"
            placeholder="film's rating : "
            value={Rating}
            onChange={(e) => setRating(parseFloat(e.target.value))}
          />
          <div className="cut cut-short" />
          <label htmlFor="Rating" className="placeholder">
            Rating :
          </label>
        </div>
        <button
          type="button"
          className="submit"
          onClick={() => {
            handleSubmit({
              id: uuidv4(),
              Title: Title,
              Description: Description,
              Rating: Rating,
              PosterURL: PosterURL,
            });
            setTitle("");
            setDescription("");
            setPosterURL("");
            setRating(0);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
