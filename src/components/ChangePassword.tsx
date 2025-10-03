import React, { useState, type FormEvent } from "react";
import { useParams, Navigate } from "react-router-dom";
import AuthLayout from "@layout/AuthLayout";
import FormField from "@comman/FormField";

type ChangePasswordParams = {
  id: string;
};

const ChangePassword: React.FC = () => {
  const { id } = useParams<ChangePasswordParams>();

  // State variables
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  // Handler
  const handleChangePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
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

      setMessage(data.message || "Password changed successfully");
      setSuccess(true);

      // Clear fields
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setMessage(`Error: ${err?.message || "Unknown error"}`);
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
          style={{
            color: success ? "green" : "red",
            fontSize: "14px",
            marginTop: "5px",
            fontWeight: 500,
          }}
        >
          {message}
        </p>
      )}
    </AuthLayout>
  );
};

export default ChangePassword;
