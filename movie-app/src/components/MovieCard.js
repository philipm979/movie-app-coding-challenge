import React from 'react';


const MovieCard = ({title, img, id}) => {
console.log(id)


return (
        <div>
            <h2 className="font">{title}</h2>
            <div>
            <a href={`https://www.imdb.com/title/${id}/`}>
            <img alt='movie' src={img} style={{height: "100%", width: "100%", maxWidth: "300px"}}/>
            </a>
            </div>

        </div>
    )

    
   
};

export default MovieCard;

