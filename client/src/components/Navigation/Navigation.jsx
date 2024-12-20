import React from "react";
import { Link } from "react-router";
import { RoutesDefinition } from "../../Routes.jsx";
import "./Navigation.css";
import {
  LogIn,
  LogOut,
  KeySquare,
  Bookmark,
  Home,
  PlusCircle,
  UserCircle,
} from "lucide-react";
import { useAuth } from "../Auth/Auth.jsx";
import Button from "../Button.jsx";

const Navigation = ({ className }) => {
  const { user, logout } = useAuth();
  return (
    <nav className={`navigation ${className ?? ""}`}>
      <Link className="button" to={RoutesDefinition.HOME}>
        <Home width={32} height={32} />
      </Link>
      {user ? (
        <Link className="button" to={RoutesDefinition.PROFILE}>
          <UserCircle width={32} height={32} />
        </Link>
      ) : null}
      {!user ? (
        <Link className="button" to={RoutesDefinition.SIGNUP}>
          <UserCircle width={32} height={32} />
        </Link>
      ) : null}
      {!user ? (
        <Link className="button" to={RoutesDefinition.LOGIN}>
          <LogIn width={32} height={32} />
        </Link>
      ) : null}
      {user ? (
        <Button className="button" onClick={logout}>
          <LogOut width={32} height={32} />
        </Button>
      ) : null}

      {user ? (
        <Link className="button" to={RoutesDefinition.NEW_POST}>
          <PlusCircle width={32} height={32} />
        </Link>
      ) : null}
    </nav>
  );
};
export default Navigation;
