import React, { useState } from "react";
import InputField from "../components/InputField.jsx";
import "../styles/CreateProfile.css";
export default function Feed() {
  return (
    <div>
      <div className="welcome-container">
        <h1>Welcome</h1>
        <h3>Tell us more about you.</h3>
      </div>
      <div className="form-container">
        <h2>First Name</h2>
        <InputField type="string" placeholder="First name" />
        <h2>Last Name</h2>
        <InputField type="string" placeholder="Last name" />
        <h2>Username</h2>
        <InputField type="string" placeholder="UsenName" />
        <h2>Password</h2>
        <InputField type="password" placeholder="Password" />
        <h2>Email</h2>
        <InputField type="email" placeholder="Email" />
        <h2>About you</h2>
        <InputField type="string" placeholder="About you" />
      </div>
      <div className="image-banner-container">
        <h2>Profile picture</h2>
        <InputField type="file" placeholder="Import from" />
        <h2>Banner picture</h2>
        <InputField type="file" placeholder="Import from" />
      </div>
    </div>
  );
}
