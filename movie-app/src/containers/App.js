import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList'
import SearchBox from '../components/SearchBox';
import './App.css';

function App () {
   

    const [movies, setMovies] = useState([])
    const [value, setValue] = useState("")
  
    
    const getMovieRequest = async (value) => {
		const url = `http://www.omdbapi.com/?s=${value}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
        console.log(responseJson.Search[0].imdbID)
	};

   
    useEffect(() => {
		getMovieRequest(value);
	}, [value]);

    const onSearchChange = (event) => {
       setValue(event.target.value)
    }

    return (   
            <div className ='tc'>
            <body>
                <h1 className = 'f1 font'>Movies</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <MovieList movies={movies}
                    />
            </body>
             </div>
            );
        }
    

  

    
export default App; 