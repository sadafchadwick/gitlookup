import React from "react";
import LocationIcon from "../assets/icon-location.svg";
import WebsiteIcon from "../assets/icon-website.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import CompanyIcon from "../assets/icon-company.svg";
import LocationIconWhite from "../assets/icon-location-white.svg";
import WebsiteIconWhite from "../assets/icon-website-white.svg";
import TwitterIconWhite from "../assets/icon-twitter-white.svg";
import CompanyIconWhite from "../assets/icon-company-white.svg";

function ProfileLinks({ userData, isDarkMode }) {
    const notAvailable = (data, defaultMessage) => {
        return data ? data : defaultMessage;
    }

    const linkStyle = {
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
    };

    const notAvailableStyle = {
        opacity: 0.5,
    };

    return (
        <div>
            {userData && (
                <div className="ProfileLinks"> 
                    <div className="ProfileLink" style={{ fontSize: "13px", display: "flex", flexDirection: "row", gap: "13px", alignItems: "center", height: "19px" }}>
                        <img style={{paddingRight: "5px", height: "20px", width: "13.75px"}} src={isDarkMode ? LocationIconWhite : LocationIcon} alt="Location Icon"/>
                        {userData.location ? (
                            <a href={`https://www.google.com/maps?q=${encodeURIComponent(userData.location)}`} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                {userData.location}
                            </a>
                        ) : (
                            <p style={notAvailableStyle}>Not Available</p>
                        )}
                    </div>

                    <div className="ProfileLink" style={{ fontSize: "13px", display: "flex", flexDirection: "row", gap: "13px", alignItems: "center", height: "19px" }}>
                        <img style={{height: "20px", width: "19.945px"}} src={isDarkMode ? WebsiteIconWhite : WebsiteIcon} alt="Website Icon" />
                        {userData.blog ? (
                            <a href={userData.blog} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                {userData.blog}
                            </a>
                        ) : (
                            <p style={notAvailableStyle}>Not Available</p>
                        )}
                    </div>

                    <div className="ProfileLink" style={{ fontSize: "13px", display: "flex", flexDirection: "row", gap: "13px", alignItems: "center", height: "19px" }}>
                        <img style={{height: "16.25px", width: "20px"}} src={isDarkMode ? TwitterIconWhite : TwitterIcon} alt="Twitter Icon" />
                        {userData.twitter_username ? (
                            <a href={`https://twitter.com/${userData.twitter_username}`} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                {userData.twitter_username}
                            </a>
                        ) : (
                            <p style={notAvailableStyle}>Not Available</p>
                        )}
                    </div>

                    <div className="ProfileLink" style={{ fontSize: "13px", display: "flex", flexDirection: "row", gap: "13px", alignItems: "center", height: "19px" }}>
                        <img style={{height: "19.85px", width: "20px"}} src={isDarkMode ? CompanyIconWhite : CompanyIcon} alt="Company Icon" />
                        {userData.company && userData.company.url ? (
                            <a href={userData.company.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                {userData.company.name}
                            </a>
                        ) : (
                            <p style={notAvailableStyle}>Not Available</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileLinks;