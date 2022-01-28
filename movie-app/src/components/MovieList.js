import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
   
return (
<div style={{display: 'flex', flexWrap: "wrap", justifyContent: "space-between"}}>
    {
       movies?.map ((movie,i) => {
            return (
                <MovieCard
                title = {movies[i].Title} 
                img = {movies[i].Poster}
                id = {movies[i].imdbID}

                />
            );
        })              
    }
</div>
)}
export default MovieList; 

// Movies Array