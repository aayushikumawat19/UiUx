import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import FormField from "./comman/FormField";

const ChangePassword = () => {
  const { id } = useParams();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      setMessage("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match");
      return;
    }

    try {
      const res = await fetch(
        `http://192.168.0.28:8080/api/auth/changepassword/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ oldPassword, newPassword, confirmPassword }),
        }
      );

      const data = await res.json();
      console.log("Change Password response:", data);

      if (!res.ok) {
        setMessage(data.message || "Password change failed");
        return;
      }

      // Success message
      setMessage(data.message || "Password changed successfully");
      setSuccess(true);

      // fields clear
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    }
  };

  if (success) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AuthLayout title="Change Password">
      <form onSubmit={handleChangePassword} className="flex flex-col gap-5">
        <FormField
          label="Old Password"
          id="oldPassword"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <FormField
          label="New Password"
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <FormField
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className="auth-button">
          Change Password
        </button>
      </form>

      {message && (
        <p
          style={{ color: success ? "green" : "red",fontSize: "14px",marginTop: "5px",fontWeight: "500",}}
        >
          {message}
        </p>
      )}
    </AuthLayout>
  );
};

export default ChangePassword;