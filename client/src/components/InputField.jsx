import React from "react";
import "../styles/InputField.css";

const InputField = ({ type, value, onChange, placeholder }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};

export default InputField;
