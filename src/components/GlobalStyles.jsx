import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
    }

    /*---------- BODY STYLES ----------*/
    body {
        background-color: ${props => (props.isDarkMode ? "#141D2F" : "#F6F8FF")};
        color: ${props => (props.isDarkMode ? "#fff" : "#4B6A9B")};
        font-family: "Space Mono", monospace; font-size: 15px; line-height: 25px; 
        display: flex; width: 100vw; height: 100vh; justify-content: center;
    }

    html {
    font-size: 15px;
    }

    /*---------- <> H TAG STYLES </> ----------*/
    h1 {
        font-family: "Space Mono", monospace; font-weight: bold; font-size: 26px; line-height: 38px; 
    }
    h2 { 
        font-family: "Space Mono", monospace; font-weight: bold; font-size: 22px; line-height: 33px; 
    } 
    h3 {
        font-family: "Space Mono", monospace; font-size: 16px; line-height: 24px;
    }
    h4 {
        font-family: "Space Mono", monospace; font-size: 13px; line-height: 20px; 
    }

        /*---------- APP STYLES ----------*/
    .App {
        background-color: ${props => (props.isDarkMode ? "#141D2F" : "#F6F8FF")};
        color: ${props => (props.isDarkMode ? "#fff" : "#4B6A9B")};
        height: 667px; width: 327px; 
        display: flex; flex-direction: column;
        margin-top: 31px;
    }

    .AppHeader {
        display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 35px;
    }

    .Title {
        color: ${props => (props.isDarkMode ? "#fff" : "#222731")};
    }

    /*---------- SEARCH BAR STYLES ----------*/
    .SearchBar form{
        display: flex; flex-direction: row; align-items: center; height: 60px; border-radius: 15px; 
        box-shadow: ${props => (props.isDarkMode ? "none" : "0px 16px 30px -10px rgba(70, 96, 187, 0.20)")}; 
        background-color: ${props => (props.isDarkMode ? "#1E2A47" : "#F6F8FF")};
        gap: 7px; margin-bottom: 16px;
    } 

    .SearchIcon {
        flex: 0 0 auto;
        padding-left: 16px; 
    }

    .SearchIcon img { 
        height: 20px; width: 20px;  
    }

    .SearchInput {
        flex: 1;
        width: 95%;
    }

    .SearchInput input{
        border:  ${props => (props.isDarkMode ? "transparent" : "transparent")};
        font-family: "Space Mono", monospace; font-size: 13px; line-height: 20px;   
        width: 95%; 
        height: 30px; padding-left: 10px; letter-spacing: -0.75px;   
        background-color: ${props => (props.isDarkMode ? "#1E2A47" : "#F6F8FF")};
        color: ${props => (props.isDarkMode ? "#fff" : "#4B6A9B")};
    } 

    .SearchInput ::placeholder{
        color: ${props => (props.isDarkMode ? "#fff" : "#4B6A9B")};
        font-size: 13px;
        letter-spacing: -0.75px;  
    }

    .SearchButton {
        background: #0079FF; color: #fff;
        width: 84px; height: 46px; border-radius: 10px; border: transparent; text-align: center;
        font-family: "Space Mono", monospace; font-size: 14px; font-weight: 700; flex: 0 0 auto; 
        margin-right: 7px; 
    }

    /*---------- PROFILE SECTION STYLES ----------*/
    .ProfileContainer {
        display: flex; flex-direction: column;
        background-color: ${props => (props.isDarkMode ? "#1E2A47" : "#FEFEFE")};
        color: ${props => (props.isDarkMode ? "#fff" : "#333")};  
        height: 517px; border-radius: 15px; padding-left: 24px; padding-right: 24px; padding-top: 32px; padding-bottom: 48px;
        box-shadow: ${props => (props.isDarkMode ? "none" : "0px 16px 30px -10px rgba(70, 96, 187, 0.20)")}; 
    }

    .ProfileImage{
            height: 70px; width: 70px; border-radius: 70px; margin-right: 19px;
        }

    .ProfileImageDesktop {
        display: none;
    }

    .ProfileInfo {
        display: flex; margin-bottom: 30px; height: 70px; 
    }

    .ProfileBio{
        min-height: 75px; max-height: 75px; overflow: overlay; font-size: 13px;
    }

    .ProfileBio::-webkit-scrollbar {
        width: 8px;
    }

    .ProfileBio::-webkit-scrollbar-thumb {
        background-color: #141D2F;
        border-radius: 8px;
    }

    .ProfileBio::-webkit-scrollbar-thumb:hover {
        background-color: #0079FF;
    }

    .ProfileBio::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    .ProfileStats {
        background-color: ${props => (props.isDarkMode ? "#141D2F" : "#F6F8FF")};
        color: ${props => (props.isDarkMode ? "#F6F8FF" : "#4B6A9B")};
        font-size: 16px; font-style: normal; font-weight: 700px; line-height: normal; text-align: center;
    }

    .ProfileLinks {
        display: flex; flex-direction: column; max-height: 107.15px; gap: 16px 
    }


/* Media query for tablet (768px and up) */
    @media (min-width: 768px) {
        .App {
            width: 573px; 
            height: 648px; 
            margin-top: 140px; 
        }

        h3 {
            font-family: "Space Mono", monospace; font-size: 26px;
        }

        h4 {
            font-family: "Space Mono", monospace; font-size: 15px;
        }

        .ProfileContainer {
        height: 481px; padding-left: 40px;
    }

        .ProfileImageDesktop{
            display: none;
        }

        .ProfileImage{
            height: 117px; width: 117px; border-radius: 117px; margin-right: 41px;
        }

        .ProfileInfo {
            display: flex;row-gap: 2px;margin-bottom: 30px;height: 117px;align-items: center;
        }

        .ProfileLinks {
            display: flex; flex-direction: column; max-height: 61px; gap: 16px;  flex-wrap: wrap; 
        }
    }

  /* Media query for desktop (1440px and up) */
    @media (min-width: 1440px) {
        .App {
            width: 730px;
            height: 513px;
            margin-top: 144px;
        }

        h3 {
            font-family: "Space Mono", monospace;
            font-size: 26px;
        }

        h4 {
            font-family: "Space Mono", monospace;
            font-size: 15px;
        }

        .ProfileContainer {
            height: 444px;
            padding: 48px;
        }

        .DesktopView {
            display: flex; flex-direction: row; gap: 37px;
        }

        .DesktopProfile{
            width: 480px;
        }

        .ProfileImageDesktop{
            display: block;
            height: 117px;
            width: 117px;
            border-radius: 117px;
        }

        .ProfileImage {
            display: none; 
        }

        .ProfileInfo {
            display: flex;
            margin-bottom: 30px;
            align-items: center;
            row-gap: 2px;
        }

        .ProfileLinks {
            display: flex;
            flex-direction: column;
            max-height: 61px;
            gap: 16px;
            flex-wrap: wrap;
        }
    }




`;
export default GlobalStyles;
