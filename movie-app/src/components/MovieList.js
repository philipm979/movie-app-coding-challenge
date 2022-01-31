import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
   
return (
<div style={{display: 'flex', flexWrap: "wrap", padding: "20px"}}>
    {
       movies?.map ((movie,i) => {
            return (
                <MovieCard
                year = {movies[i].Year} 
                img = {movies[i].Poster}
                id = {movies[i].imdbID}
                title ={movies[i].Title}

                />
            );
        })              
    }
</div>
)}
export default MovieList; 

// Movies Array