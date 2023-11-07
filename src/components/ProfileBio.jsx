import React from "react";

function ProfileBio({ userData }) {
    return (
        <div>
            {userData && (
                <div>
                    <p >{userData.bio || "No Bio Available"}</p>
                </div>
            )}
        </div>
    );
}

export default ProfileBio;