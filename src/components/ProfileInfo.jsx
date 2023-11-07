import React from "react";

function formatDate(dateString) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
}

function ProfileInfo({ userData }) {
    return (
        <div className="ProfileInfo">
            {userData && (
                <>
                    <div>
                        <img
                            className="ProfileImage"
                            src={userData.avatar_url}
                            alt={`${userData.name}'s Avatar`}
                        />
                    </div>
                    <div>
                        <h3>{userData.name}</h3>
                        <h4 style={{ marginBottom: "5px", color: "#0079FF", fontWeight: "400" }}>
                            @{userData.login}
                        </h4>
                        <h4 style={{ fontWeight: "400" }}>Joined {formatDate(userData.created_at)}</h4>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProfileInfo;