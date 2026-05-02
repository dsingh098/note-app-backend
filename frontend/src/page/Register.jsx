import React, { useState } from "react";
import { register } from "../../service/auth.service.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  let navigate = useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!name || !username || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const formData = {
        name,
        username,
        email,
        password,
      };

      const res = await register(formData);

      setSuccess("User registered successfully");

     
      setName("");
      setUserName("");
      setEmail("");
      setPassword("");

    } catch (err) {
      setError("Registration failed");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <p>Already have account <span onClick={() => navigate("/")}>Login</span></p>
      </form>
    </div>
  );
};

export default Register;