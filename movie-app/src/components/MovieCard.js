import React from 'react';
import './MovieCard.css';


const MovieCard = ({img, id, title, year}) => {



return (
  
   
    <div style={{padding: "3rem"}}>
        <h2 className="font">{year}</h2>
  
            <a href={`https://www.imdb.com/title/${id}/`}>
               
                    <img alt={title} src={img} className="img-size"/>
            </a>
    </div>
   
   
        )

};

export default MovieCard;

