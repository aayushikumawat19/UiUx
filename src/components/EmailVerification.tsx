import React, { useState } from 'react';
import AuthLayout from './signup';
import { useNavigate } from 'react-router-dom';

interface EmailVerificationProps {
  onSubmit?: (code: string) => Promise<void>;
  subtitle?: React.ReactNode;
  redirectPath?: string;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({
  onSubmit,
  subtitle = (
    <>
      <p>Password recovery.</p>
      <h2 className="auth-title">Email verification</h2>
      Kindly enter the 6 digit code that has been sent to your email address.
    </>
  ),
  redirectPath = '/password-reset',
}) => {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const joinedCode = code.join('');

    if (joinedCode.length !== 6 || code.includes('')) {
      setError('Please enter all 6 digits of the code.');
      return;
    }

    setError('');

    // ✅ Save to localStorage
    localStorage.setItem('emailVerificationCode', joinedCode);

    try {
      if (onSubmit) {
        await onSubmit(joinedCode);
      }
      navigate(redirectPath);
    } catch (error: any) {
      setError(error.message || 'Verification failed.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const val = e.target.value.replace(/\D/g, ''); // Only digits
    const newCode = [...code];
    newCode[i] = val;
    setCode(newCode);

    if (val && i < 5) {
      const nextInput = document.getElementById(`code-${i + 1}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
    if (e.key === 'Backspace' && !code[i] && i > 0) {
      const prevInput = document.getElementById(`code-${i - 1}`);
      if (prevInput) (prevInput as HTMLInputElement).focus();
    }
  };

  return (
    <AuthLayout title="Email Verification" subtitle={subtitle}>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <div className="code-inputs" style={{ display: 'flex', gap: '12px' }}>
            {code.map((digit, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                id={`code-${i}`}
                style={{
                  width: '50px',
                  height: '50px',
                  textAlign: 'center',
                  fontSize: '24px',
                  borderRadius: '10px',
                  border: error ? '1px solid red' : '1px solid #ccc',
                }}
                inputMode="numeric"
                pattern="[0-9]*"
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <button type="submit" className="auth-button" style={{ marginTop: '20px' }}>
          Verify Code
        </button>
      </form>
    </AuthLayout>
  );
};

export default EmailVerification;
