import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({ movies, addMovie }) => {
  
  return (
    <div>
        <h4 style={{textAlign:"center",padding:20}}>LIST OF MOVIES</h4>
            <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", padding:"3%" }}>
        {movies.map((el, i) => (
          <div>
            <MovieCard movie={el} key={i} />

          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
