import React from 'react';
import './MovieCard.css';


const MovieCard = ({year, img, id, title}) => {



return (
  
    <div className="grid">
            <a href={`https://www.imdb.com/title/${id}/`}>
                <img alt={title} src={img} className="img-size"/>
            </a>
    </div>
   
        )

};

export default MovieCard;

