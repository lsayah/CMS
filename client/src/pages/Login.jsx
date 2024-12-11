import React, { useState } from "react";
import "../styles/Login.css";
import Button from "../components/button.jsx";
import InputField from "../components/InputField.jsx";
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
      setMessage(data.message || "Connexion réussie !");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <div className="logo-container">
        <div className="rectangle"></div>
      </div>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <h3>Email</h3>
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Password</h3>
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <input
              type="checkbox"
              id="RememberMe"
              name="interest"
              value="RememberMe"
            />
            <label htmlFor="RememberMe">Remember me</label>
          </div>
          <button type="submit">Log In</button>
        </form>
        {message && <p>{message}</p>}{" "}
        {/* Affiche les messages d'erreur ou succès */}
      </div>
    </div>
  );
}
