import React from 'react';
import MovieCard from './MovieCard';
import './MovieCard.css';

const MovieList = ({movies}) => {
   
return (
<div className="grid">
    {
       movies?.map ((movie,i) => {
            return (
                <MovieCard 
                img = {movies[i].Poster}
                id = {movies[i].imdbID}
                title ={movies[i].Title}
                year ={movies[i].Year}

                />
            );
        })              
    }
</div>
)}
export default MovieList; 

// Movies Array

