import React from "react";


function ProfileStats({ userData, isDarkMode}) {
    return (
        <div className="ProfileStats" style={{
            display: "flex", borderRadius: "10px", alignItems: "stretch", justifyContent: "center",flexDirection: "column", marginBottom: "24px", marginTop: "23px"
        }}>
            {userData && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "row", height: "85px" }}>

                    <div><span style={{ fontSize: "11px", fontWeight: "400" }}>Repos</span><br></br><span style={{ fontSize: "16px", fontWeight: "700", color: isDarkMode ? "#fff" : "#2b3442" }}>{userData.public_repos}</span></div>

                    <div><span style={{ fontSize: "11px", fontWeight: "400" }}>Followers</span><br></br><span style={{ fontSize: "16px", fontWeight: "700", color: isDarkMode ? "#fff" : "#2b3442" }}>{userData.followers}</span></div>

                    <div><span style={{ fontSize: "11px", fontWeight: "400" }}>Following</span><br></br><span style={{ fontSize: "16px", fontWeight: "700", color: isDarkMode ? "#fff" : "#2b3442" }}>{userData.following}</span></div>

                </div>
            )}
        </div>
    );
}

export default ProfileStats;