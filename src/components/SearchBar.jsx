import React, { useState } from "react";
import SearchIcon from '../assets/icon-search.svg';


function SearchBar({onSubmit}) {
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); 
        onSubmit(searchInput);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="SearchIcon"><img src={SearchIcon} alt="Search Icon" /></div>
            <div className="SearchInput"><h4><input 
                type="text"
                placeholder="Search GitHub username..."
                value={searchInput}
                onChange={handleInputChange}/></h4>
                </div>
            <button className="SearchButton" onClick={() => onSubmit(searchInput)}> Search </button>
        </form> 
    );
}

export default SearchBar;