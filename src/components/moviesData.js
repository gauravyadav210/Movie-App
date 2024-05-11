// components/MovieItem.js
import React from 'react';

function MovieItem({ movie }) {
  return (
    <div className="movie-item">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      {/* Add more movie details here */}
      <button>Borrow</button>
    </div>
  );
}

export default MovieItem;
