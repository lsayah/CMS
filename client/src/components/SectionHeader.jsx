import React from "react";
import "../styles/SectionHeader.css";

const SectionHeader = ({ title, linkText }) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <a href="/feed">{linkText}</a>
    </div>
  );
};

export default SectionHeader;
