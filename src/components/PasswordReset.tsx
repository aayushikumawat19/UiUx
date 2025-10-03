import React, { useState } from 'react';
import AuthLayout from './signup';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SuccessImage from '../assets/Group (1).png';
import FormField from './comman/FormField';

const PasswordReset = ({
  successMessage = (
    <>
      You have successfully changed<br />
      your password.
    </>
  ),
  subtitle = (
    <>
      <p>Password recovery.</p>
      <h2 className="auth-title">Password Reset</h2>
      <p>Kindly enter a new password.</p>
    </>
  )
}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setError('Both password fields are required.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    // ✅ Save to localStorage
    localStorage.setItem('resetPassword', newPassword);

    setError('');
    setIsModalVisible(true);
  };

  const handleContinue = () => {
    navigate('/login');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <AuthLayout title="Password Reset" subtitle={subtitle}>
      <form onSubmit={handleSubmit} className="auth-form">

        {/* New Password Field */}
        <div style={{ position: 'relative' }}>
          <FormField
            label="New Password"
            id="newPassword"
            type={showNewPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            errorMessage={error && !newPassword ? error : ''}
            autoComplete="new-password"
          />
          <span
            onClick={() => setShowNewPassword(!showNewPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '38px',
              cursor: 'pointer'
            }}
          >
            {showNewPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        {/* Confirm Password Field */}
        <div style={{ position: 'relative', marginTop: '16px' }}>
          <FormField
            label="Confirm New Password"
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            errorMessage={error && newPassword !== confirmPassword ? error : ''}
            autoComplete="new-password"
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '38px',
              cursor: 'pointer'
            }}
          >
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <button type="submit" className="auth-button" style={{ marginTop: '20px' }}>
          Reset Password
        </button>
      </form>

      {/* Success Modal */}
      <Modal
        open={isModalVisible}
        onOk={handleContinue}
        onCancel={handleCancel}
        footer={[
          <Button key="continue" type="primary" onClick={handleContinue}>
            Back To Login
          </Button>
        ]}
        bodyStyle={{ textAlign: 'center' }}
        className="custom-modal"
      >
        <div style={{ marginBottom: '20px' }}>
          <img src={SuccessImage} alt="Success" />
        </div>
        <h2 style={{ margin: '10px 0' }}>Congratulations</h2>
        <p>{successMessage}</p>
      </Modal>
    </AuthLayout>
  );
};

export default PasswordReset;
