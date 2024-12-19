import React from "react";
import { Link } from "react-router";
import { RoutesDefinition } from "../../Routes.jsx";
import "./Navigation.css";
import Button from "../Button.jsx";
import { LogIn as SignUp, KeySquare, Bookmark, Home, PlusCircle, UserCircle } from "lucide-react";

const Navigation = ({ className }) => {
  return (
    <nav className={`navigation ${className ?? ""}`}>
      <Link className="button" to={RoutesDefinition.HOME}>
        <Home  width={32} height={32}/>
      </Link>
      <Link className="button" to={RoutesDefinition.PROFILE}>
        <UserCircle  width={32} height={32}/>
      </Link>
      <Link className="button" to={RoutesDefinition.SIGNUP}>
        <SignUp width={32} height={32}/>
      </Link>
      <Link className="button" to={RoutesDefinition.LOGIN}>
        <KeySquare width={32} height={32}/>
      </Link>
      <Link className="button">
        <Bookmark width={32} height={32}/>
      </Link>
      <Link className="button" to={RoutesDefinition.NEW_POST}>
        <PlusCircle width={32} height={32}/>
      </Link>
    </nav>
  );
};
export default Navigation;
