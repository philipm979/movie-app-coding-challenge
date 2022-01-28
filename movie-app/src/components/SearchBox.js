import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className= 'pa2'>
            <input 
                className = 'pa3 ba b--red bg-lightest-red'
                type='search' 
                placeholder='search movies' 
                onChange = {searchChange}

            />
        </div>
    );
}

export default SearchBox;


