import React, {useState, useContext} from 'react';
import Movie from './movie';
import {MovieContext} from './MoviesContext';

const MoviesList = () => {
  //pass the context we want to use
  const [movies,setMovies] = useContext(MovieContext);
  return(
    <div>
    {movies.map(movie => (
      <Movie key={movie.id} name={movie.name} price={movie.price} />
    ))}
    </div>
  );
}


export default MoviesList;