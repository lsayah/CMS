import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
export function Ruchdane() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsername(data.username));
  }, []);
  const [count, setCount] = useState(0);

  <button onClick={() => setCount((count) => count + 1)}>
    {username} is {count}
  </button>;
}
