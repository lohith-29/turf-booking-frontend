import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    try {
      // 🔥 CALL SPRING BOOT BACKEND
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();

      // 🔴 IF USER NOT FOUND
      if (!data || !data.id) {
        alert("Invalid email or password");
        return;
      }

      // ✅ STORE FULL USER OBJECT
      localStorage.setItem("user", JSON.stringify(data));

      // OPTIONAL (for quick check)
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful!");

      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>

        <p>
          New user?{" "}
          <Link to="/register" className="auth-link">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;