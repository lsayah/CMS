import React from "react";
import "./Navigation.css";
import Button from "../Button.jsx";
import { Bookmark, Home, PlusCircle, UserCircle } from "lucide-react";

const Navigation = ({ className }) => {
  return (
    <nav className={`navigation ${className ?? ""}`}>
      <Button>
        <Home  width={32} height={32}/>
      </Button>
      <Button>
        <UserCircle  width={32} height={32}/>
      </Button>
      <Button>
        <Bookmark width={32} height={32}/>
      </Button>
      <Button>
        <PlusCircle width={32} height={32}/>
      </Button>
    </nav>
  );
};
export default Navigation;
