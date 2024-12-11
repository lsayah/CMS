import React from "react";
import "../styles/TopCreators.css";

const TopCreators = () => {
  const creators = [
    "JustAgi",
    "PostGenerator",
    "Cybersecurity_Daily",
    "Abzy2.0",
  ];

  return (
    <div className="top-creators">
      <h3>Top Creators</h3>
      <div className="creator-list">
        {creators.map((creator, index) => (
          <div key={index} className="creator-card">
            {creator}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
