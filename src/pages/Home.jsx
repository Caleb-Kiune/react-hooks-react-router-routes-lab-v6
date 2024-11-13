import React from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

const Home = ({ movies }) => (
  <div>
    <NavBar />
    <h1>Home Page</h1>
    {movies.map(movie => (
      <MovieCard key={movie.id} title={movie.title} id={movie.id} />
    ))}
  </div>
);

export default Home;
