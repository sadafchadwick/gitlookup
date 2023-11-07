import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileBio from "./ProfileBio";
import ProfileStats from "./ProfileStats";
import ProfileLinks from "./ProfileLinks";

function ProfileContainer({ userData, error, isDarkMode }) {
    return (
        <div>
            {error ? (
                <div className="ErrorMessage" style={{ color: "#F74646", fontWeight: "700", textAlign: "center" }}>
                    <p>{error}</p>
                </div>
            ) : (
                userData && (
                    <div className="DesktopView">
                        <div>
                            <img className="ProfileImageDesktop" src={userData.avatar_url} alt="User Avatar" />
                        </div>
                        <div className="DesktopProfile">
                            <ProfileInfo userData={userData} />
                            <ProfileBio userData={userData} />
                            <ProfileStats userData={userData} isDarkMode={isDarkMode} />
                            <ProfileLinks userData={userData} isDarkMode={isDarkMode} />
                            </div>
                    </div>
                )
            )}
        </div>
    );
}

export default ProfileContainer;