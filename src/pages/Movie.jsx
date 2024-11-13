import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Movie = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) return <h1>Movie not found</h1>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
    </div>
  );
};

export default Movie;
