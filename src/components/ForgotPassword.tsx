import React, { useState } from 'react';
import AuthLayout from './signup';
import { useNavigate } from 'react-router-dom';
import FormField from './comman/FormField';
interface ForgotPasswordProps {
  onSubmit?: (email: string) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage('Email is required');
      return;
    }

    setErrorMessage('');
    if (onSubmit) {
      onSubmit(email);
    }

    // Optional: Save to localStorage
    localStorage.setItem('forgotEmail', email);

    navigate('/email-verification');
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle={
        <>
          <p>Password recovery.</p>
          <h2 className="auth-title">Forgot your password?</h2>
          Kindly enter the email address linked to this account and<br />
          we will send you a code to enable you to change your<br />
          password.
        </>
      }
    >
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <FormField
            label="Email address"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMessage={errorMessage}
            placeholder="Enter your email"
            autoComplete="email"
          />
        </div>
        <button type="submit" className="auth-button" style={{ marginTop: '20px' }}>
          Send Code
        </button>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
