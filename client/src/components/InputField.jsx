import React from "react";
import "../styles/InputField.css";

const LabelInput = (props) => {
  return (
    <div className="label-input">
      <label htmlFor={props.id}> {props.label}</label>
      <input className="input" {...props}     />
    </div>
  );
};

export default LabelInput;
