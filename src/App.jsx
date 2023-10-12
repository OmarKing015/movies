/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import './app.css';
import MovieCard from "./MovieCard";
import SearchIcon from './seaech.svg';

// MY_API_KEY = 14cd875a
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=14cd875a';

const movie1 =
  {
    "Title": "Batman & Robin",
    "Year": "1997",
    "imdbID": "tt0118688",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
};


function App() {
const [searchTerm, setSearchTerm] = useState([]);
const[movies, setMovies] = useState([]);

const searchMovies = async (title) => {
  //requesting the movie form the API
  const res = await fetch(`${API_URL}&s=${title}`);
const data = await res.json();


setMovies(data.Search);
console.log(data.Search);
}



  return (
    <div className="app">
      <h1>MoviePlace</h1>

<div className="search">
<input type="text" placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} name="" id="" />
  <img src={SearchIcon} alt="search" 
  onClick={() => searchMovies(searchTerm)}
  srcset="" />
</div>



{
  movies?.length > 0 
  ? (<div className="container">
    {movies.map((movie) => (
     < MovieCard movie={movie}/>
    ))}
     </div>
     ) : (
      <div className="empty">
        <h2>No Movies has been found</h2>
      </div>
     )
}


</div>
   
  );
}

export default App;
