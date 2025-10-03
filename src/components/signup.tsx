import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import FormField from "./comman/FormField";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !role) {
      setMessage("Please fill all fields");
      return;
    }

    const userData = { firstName, lastName, email, roles: [role] };

    try {
      const res = await fetch("http://192.168.0.28:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log("Signup response:", data);

      if (!res.ok) {
        setMessage(data.message || "Registration failed");
        return;
      }

      // success message
      setMessage(data.message || "Registration successful");

      // fields clear
      setFirstName("");
      setLastName("");
      setEmail("");
      setRole("");

    } catch (err: any) {
      setMessage(`Registration failed: ${err.message}`);
    }
  };
  
  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSignup} className="flex flex-col gap-5">
        <FormField
          label="First Name"
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormField
          label="Last Name"
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormField
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          label="Role"
          id="role"
          type="select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          options={[
            { value: "", label: "Select Role" },
            { value: "USER", label: "User" },
            { value: "ADMIN", label: "Admin" },
          ]}
        />
        <button type="submit" className="auth-button">
          Sign Up
        </button>
      </form>

      {message && (
        <p
          style={{ color: "green",fontSize: "14px",marginTop: "5px",fontWeight: "500",}}
        >
          {message}
        </p>
      )}

      <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
        Already have an account?{" "}
        <span
          style={{
            color: "#2563eb",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </AuthLayout>
  );
};

export default Signup;