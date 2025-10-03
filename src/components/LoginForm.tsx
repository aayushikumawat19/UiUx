import React, { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@layout/AuthLayout";
import FormField from "@comman/FormField";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface LoginResponse {
  token: string;
  user: Record<string, any>;
  message?: string;
}

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://192.168.0.28:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data: LoginResponse = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err: any) {
      setError("Server error: " + (err?.message || err));
    }
  };

  return (
    <AuthLayout title="Please Sign In" subtitle="Welcome back !!">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <FormField
          label="Email"
          id="login_email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative">
          <FormField
            label="Password"
            id="login_password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        {error && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              marginTop: "5px",
              fontWeight: "500",
            }}
          >
            {error}
          </p>
        )}

        <button type="submit" className="auth-button">
          Sign In
        </button>
      </form>

      {/* Signup link */}
      <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
        Don’t have an account?{" "}
        <span
          style={{
            color: "#2563eb",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => navigate("/signup")}
        >
          Signup
        </span>
      </p>
    </AuthLayout>
  );
};

export default LoginForm;
