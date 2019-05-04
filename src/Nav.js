import React,{useContext} from 'react';
import {MovieContext} from './MoviesContext';

const Nav = () => {
  const [movies,setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>My Favorite Movies</h3>
      <p>Number of Movies: {movies.length}</p>
    </div>
  )
}

export default Nav;