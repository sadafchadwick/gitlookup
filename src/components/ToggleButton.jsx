import React from "react";
import styled from "styled-components";
import SunIcon from "../assets/icon-sun.svg";
import MoonIcon from "../assets/icon-moon.svg";

    const StyledButton = styled.button`
        background: ${props =>
            props.isDarkMode ? darkColors.background : lightColors.background};
        border: ${props =>
            props.isDarkMode ? darkColors.border : lightColors.border};
        color: ${props =>
            props.isDarkMode ? darkColors.text : lightColors.text};
        cursor: pointer;
        font-size: 0.8rem;
        letter-spacing: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        font-family: "Space Mono", monospace;
    `;

export const ToggleButton = ({ isDarkMode, onClick }) => {
    return (
        <StyledButton onClick={onClick} isDarkMode={isDarkMode} >
            <h4>{isDarkMode ? 'LIGHT' : 'DARK'}</h4>
            <img
                src={isDarkMode ? SunIcon : MoonIcon}
                alt={isDarkMode ? "Sun Icon" : "Moon Icon"}
            />
        </StyledButton>
    );
};

const lightColors = {
    background: "#F6F8FF",
    border: "none",
    text: "#4B6A9B",
};

const darkColors = {
    background: "#141D2F",
    border: "none",
    text: "#FFF",
};
