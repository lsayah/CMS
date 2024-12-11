import React from "react";
import "../styles/Header.css";

const Header = ({ username }) => {
  return (
    <header className="header">
      <h1>Hi {username} 👋</h1>
      <p>See all articles of the community</p>
    </header>
  );
};

export default Header;
