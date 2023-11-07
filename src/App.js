import React, { useState, useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import ProfileContainer from "./components/ProfileContainer";
import SearchBar from "./components/SearchBar";
import { ToggleButton } from "./components/ToggleButton";
import fetchUserProfile from "./scripts/fetch";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [lastSearchedUser, setLastSearchedUser] = useState(null);

    const toggleIsDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleSearch = async (searchString) => {
        try {
            const data = await fetchUserProfile(searchString);
            setUserData(data);
            setError(null);
            
            localStorage.setItem("lastSearchedUser", searchString);
        } catch (error) {
            setError("No results");
        }
    };

    const handleError = (errorMessage) => {
        setError(errorMessage);
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("lastSearchedUser");
        if (storedUser) {
            setLastSearchedUser(storedUser);
        } else {
            setLastSearchedUser("octocat");
        }
    }, []);

    useEffect(() => {
        if (lastSearchedUser) {
            handleSearch(lastSearchedUser);
        }
    }, [lastSearchedUser]);

    return (
        <div className="App">
            <GlobalStyles isDarkMode={isDarkMode} />
            <div className="AppHeader">
                <h1 className="Title">gitlookup</h1>
                <ToggleButton onClick={toggleIsDarkMode} isDarkMode={isDarkMode} />
            </div>
            <div className="SearchBar">
                <SearchBar onSubmit={handleSearch} onError={handleError} isDarkMode={isDarkMode} />
            </div>
            <div className="ProfileContainer">
                <ProfileContainer userData={userData} error={error} isDarkMode={isDarkMode} />
            </div>
        </div>
    );
}

export default App;