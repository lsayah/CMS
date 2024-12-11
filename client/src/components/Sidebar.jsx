import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ isNavOpen, toggleNav }) => {
  return (
    <aside className={`sidebar ${isNavOpen ? "open" : "collapsed"}`}>
      <button className="toggle-btn" onClick={toggleNav}>
        {isNavOpen ? "←" : "→"}
      </button>
      <nav className="menu">
        <a href="/profile">Profile</a>
        <a href="/">Home</a>
        <a href="/post">Create Post</a>
      </nav>
      <div className="bottom-options">
        <button>Filters</button>
        <button>Follows</button>
        <button>Pay us a coffee!</button>
      </div>
    </aside>
  );
};

export default Sidebar;
