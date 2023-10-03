import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // In a real application, you would validate the username and password,
    // e.g., by making an API request to a server.
    // For simplicity, we'll just check if the username is "user" and password is "password".
    if (username === "user" && password === "password") {
      // Set a flag in localStorage to indicate the user is logged in
      localStorage.setItem("isLoggedIn", "true");
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    // Remove the isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
