/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import './app.css';
import MovieCard from "./MovieCard";
import SearchIcon from './seaech.svg';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7WMLtFiwYGh0KQgY7JA1NQcaNX32w3rg",
  authDomain: "movieplace-d0fdd.firebaseapp.com",
  projectId: "movieplace-d0fdd",
  storageBucket: "movieplace-d0fdd.appspot.com",
  messagingSenderId: "993429309001",
  appId: "1:993429309001:web:1033fddcdae5e124c06198",
  measurementId: "G-LZBV56M3TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
