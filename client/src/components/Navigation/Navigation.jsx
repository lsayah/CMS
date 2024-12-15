import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Button from "../Button.jsx";
import Home from "../../assets/icons/Home.svg";
import UserProfile from "../../assets/icons/UserProfile.svg";
import Bookmark from "../../assets/icons/Bookmark.svg";
import AddPost from "../../assets/icons/AddPost.svg";
const Navigation = () => {
  return (
    <nav className="navigation">
      <Button>
        <img src={Home} alt="Home" />
      </Button>
      <Button>
        <img src={UserProfile} alt="User-Profile"></img>
      </Button>
      <Button>
        <img src={Bookmark} alt="Bookmark"></img>
      </Button>
      <Button>
        <img src={AddPost} alt="AddPost"></img>
      </Button>
    </nav>
  );
};
export default Navigation;
