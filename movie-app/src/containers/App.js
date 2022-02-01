import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList'
import SearchBox from '../components/SearchBox';
import './App.css';
import worker from "./worker.js";
import WebWorker from "./workerSetup";


export default function App () {
    
    const sortWorker = new WebWorker(worker);
   
    const [movies, setMovies] = useState([])
    const [value, setValue] = useState("")
  
    const getMovieRequest = async (value) => {
		const url = `http://www.omdbapi.com/?s=${value}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();
        
		if (responseJson.Search) {
            sortWorker.postMessage(responseJson.Search);
            sortWorker.onmessage = (e) => {
                setMovies(e.data)
                console.log(e.data)
            }

        }
    }
        
    
    useEffect(() => {
		getMovieRequest(value);
	}, [value]);

    const onSearchChange = (event) => {
       setValue(event.target.value);
    }

    return (   
            <div className ='tc'>
            
                <h1 className = 'f1 font'>Movies</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <MovieList movies={movies}
                    />
            
             </div>
            );
        }
    
