import React from "react";
import "./AuthLayout.css";
// NOTE: Make sure the paths to your images are correct!
import Depositphotos from "../assets/Depositphotos_412884830_L 1.png";
import Group from "../assets/Group 13.png";

const AuthLayout = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="auth-layout flex min-h-screen">
      {/* Left Side */}
      <div className="auth-form-section flex flex-col justify-center p-10 w-1/2 bg-white">
        {/* Header */}
        <div className="auth-header flex justify-between items-center mb-8 m-auto">
          <div className="logo-container flex items-center gap-3">
            <img src={Group} alt="Logo" className="logo" />
            <span className="logo-text">
              <strong>UiUxOtor</strong>{" "}
              <span className="text-muted">ERP System</span>
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="auth-card p-8 bg-gray-50 rounded-lg shadow-lg">
          <div className="auth-title-section mb-6">
            {subtitle && <p className="subtitle">{subtitle}</p>}
            <h2 className="auth-title">{title}</h2>
          </div>

          {children}
        </div>
      </div>

      {/* Right Side Image */}
      <div className="auth-image-section w-1/2">
        <img src={Depositphotos} alt="Illustration" className="auth-image" />
      </div>
    </div>
  );
};

export default AuthLayout;