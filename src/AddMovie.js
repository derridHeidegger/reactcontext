import React,{useState, useContext} from 'react'
import {MovieContext} from './MoviesContext';


const AddMovie = () => {
  const [movies,setMovies] = useContext(MovieContext);

  const [name,setName] = useState('');
  const [price,setPrice] = useState('');

  const updateName = (e) => {
    setName(e.target.value);
  }

  const updatePrice = (e) => {
    setPrice(e.target.value);
  }

  const addMovie = (e) => {
    e.preventDefault();
    //downside of using context: every time we update, all components who use it re-render
    setMovies(prevMovies => [...prevMovies, {
      name: name,
      price: price,
      id: Math.floor(Math.random() * 10)
    }])
    
  }

  return (
    <div>
      <form onSubmit={addMovie}>
        <input type="text" name="name" value={name} onChange={updateName}/>
        <input type="text" name="price" value={price} onChange={updatePrice}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddMovie;