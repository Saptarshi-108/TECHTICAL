import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      login(res.data);
      navigate(res.data.role === "admin" ? "/admin/dashboard" : "/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.role) {
      setError("Please select a role.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      login(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="login-page">
      <h2>{isRegister ? "Register" : "Login"}</h2>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={isRegister ? handleRegister : handleLogin}>
        {isRegister && (
          <>
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <div className="role-selector">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={formData.role === "admin"}
                  onChange={handleChange}
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="reader"
                  checked={formData.role === "reader"}
                  onChange={handleChange}
                />
                Reader
              </label>
            </div>
          </>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {isRegister && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}

        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>

      <p>
        {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          className="toggle-auth"
          onClick={() => setIsRegister((prev) => !prev)}
        >
          {isRegister ? "Login" : "Register"}
        </button>
      </p>
    </div>
  );
};

export default Login;
