import React,{useState, createContext} from 'react'

//initiate the context for state management
//the name the same as the file
export const MovieContext = createContext();


export const MovieProvider = (props) => {
  const [movies,setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '10',
      id: 324412
    },
    {
      name: 'Games of Thrones',
      price: '90',
      id: 325512
    },
    {
      name: 'Inception',
      price: '40',
      id: 387512
    }
  ]);
  return (
    <MovieContext.Provider value={[movies,setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}

