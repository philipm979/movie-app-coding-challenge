import React from 'react';
import MovieCard from './MovieCard';
import './MovieCard.css';

const MovieList = ({movies}) => {
   
return (
<div className="grid">
{
 Object.keys(movies).map((key,i) =>{
        return (
            <div key ={key}>
            <h1 className='font'>{key}</h1>
            
            {movies[key].map((item,i)=>{
                return (
                    <MovieCard 
                    img = {item.Poster}
                    id = {item.imdbID}
                    title ={item.Title}/>
                    )
                })}
            </div>

        )
 })}
</div>)
}


export default MovieList; 
    
    
//   Movies Array 

