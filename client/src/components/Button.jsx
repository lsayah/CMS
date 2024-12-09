import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Button.css";

const Button = ({ text, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
