"use client"

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    email === "test@email.com" && password === "password123" ? setStatus("Logged in!") : setStatus("Invalid credentials. Try again!");
  };


  return (
    <main className="page">
      <div className="login-container">
        <h1 id="title">Login Page</h1>

        <form onSubmit={handleSubmit} >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="test@email.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
          <button type="submit">Log In</button>
        </form>

        {status && (
          <p>{status}</p>
        )}
      </div>
    </main>
  );
}
