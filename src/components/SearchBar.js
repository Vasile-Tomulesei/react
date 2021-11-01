import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ( {onSearchBarChange}) => {
    const [searchText, setSearchText] = useState('');
    const inputChangeHandler = (event) => {
        console.log(event);
        setSearchText(event.target.value);
        onSearchBarChange(event.target.value);
    }
    return (
        <div className="searchBarContainer">
            <input value={searchText} className="searchBar" onChange={inputChangeHandler}/>
        </div>
    )
}

export default SearchBar
