import React from 'react';
import './App.css';
import MoviesList from './moviesList';
import Nav from './Nav';
import {MovieProvider} from './MoviesContext';
import AddMovie from './AddMovie';

function App() {
  return (
    //we wrap the components that needs the state data with the right context
    <MovieProvider>
      <div className="App">
        <Nav/>
        <AddMovie/>
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
