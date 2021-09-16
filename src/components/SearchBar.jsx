import React from 'react';
import './searchbar.css';

function SearchBar({placeholder, data}) {
    return (
        <div className='search'>
            <div className='searchInputs'><input type='text' placeholder={placeholder} /></div>
                <div className='searchIcon'></div>
            <div className='searchResult' data={SearchResult}></div>

        </div>
    )
}

export default SearchBar
