import React from "react";
import "../styles/Sidebar.css";
import Navigation from "./Navigation/Navigation.jsx";

const Sidebar = ({ isNavOpen, toggleNav }) => {
  return (
    <aside className={`sidebar ${isNavOpen ? "open" : "collapsed"}`}>
      <button className="toggle-btn" onClick={toggleNav}>
        {isNavOpen ? "←" : "→"}
      </button>
      {isNavOpen && <Navigation />}
    </aside>
  );
};

export default Sidebar;
