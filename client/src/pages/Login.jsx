import React, { useState } from "react";
import { RoutesDefinition } from "../Routes.jsx";
import "../styles/Login.css";
import Button from "../components/Button.jsx";
import LabelInput from "../components/InputField.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Données envoyées
      });

      if (!response.ok) {
        setMessage("Login échoué. Vérifiez vos informations.");
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return <>
    <div className="login-hero login-hero-full">
      <p></p>
      <p>
        <strong>
          <span className="font-unique">P</span>eople's
          <br />
          HUB
        </strong>
      </p>
      <p>
        <strong>S</strong>hare, <strong>L</strong>earn, <strong>G</strong>row <strong>T</strong>ogether
      </p>
    </div>
    <p class="login-hero login-hero-section">
      <strong>
        <span className="font-unique">P</span>eople's
        <br />
        HUB
      </strong>
    </p>
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <LabelInput
          id="email"
          type="email"
          label="Email"
          placeholder="john.doe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabelInput
          id="password"
          type="password"
          label="Password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LabelInput
          type="checkbox"
          id="RememberMe"
          label="Remember Me"
          name="interest"
          value="RememberMe"
        />
        <div className="login-actions">
          <Button type="submit"> Log In </Button>
          <Button
            onClick={() => navigate(RoutesDefinition.SIGNUP)}
          >
            Sign up
          </Button>
        </div>
      </form>
      {message && <p>{message}</p>}{" "}
    </div>
    <p class="login-hero login-hero-section">
      <strong>S</strong>hare, <strong>L</strong>earn, <strong>G</strong>row <strong>T</strong>ogether
    </p>
  </>
}
