import React from "react";
import "../styles/Login.css";
import Button from "../components/button.jsx";
import InputField from "../components/InputField.jsx";
export default function Login() {
  return (
    <div>
      <div class="logo-container">
        <div class="rectangle"></div>
      </div>
      <div class="login-container">
        <h1>Login</h1>
        <h3>Email :</h3>
        <InputField type="email" placeholder="Email" />
        <h3>Password :</h3>
        <InputField type="password" placeholder="Password" />
        <div>
          <input
            type="checkbox"
            id="RememberMe"
            name="interest"
            value="RememberMe"
          />
          <label for="coding">Remember me</label>
        </div>
        <Button text="Log In" />
      </div>
    </div>
  );
}
