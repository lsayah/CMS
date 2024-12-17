import React from "react";
import "../styles/Button.css";

const Button = (props) => {
  return <button  {...props} className={`button ${props.className ?? ""}`}/>;
};

export default Button;
