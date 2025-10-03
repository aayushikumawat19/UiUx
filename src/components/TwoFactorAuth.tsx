import React, { useState, ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import AuthLayout from './signup';
import { useNavigate } from 'react-router-dom';

interface TwoFactorAuthProps {
  onSubmit?: (code: string) => Promise<void>;
  title?: string;
  subtitle?: React.ReactNode;
  redirectPath?: string;
}

const TwoFactorAuth: React.FC<TwoFactorAuthProps> = ({
  onSubmit,
  title = "Please enter the 2FA code sent to your mail.",
  subtitle = "2FA",
  redirectPath = '/dashboard',
}) => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullCode = code.join('');

    if (fullCode.length !== 6 || code.includes('')) {
      setErrorMessage('Please enter all 6 digits of the code.');
      return;
    }

    setErrorMessage('');

    // ✅ Save to localStorage
    localStorage.setItem('twoFactorCode', fullCode);

    try {
      if (onSubmit) {
        await onSubmit(fullCode);
      }
      navigate(redirectPath);
    } catch (error: any) {
      setErrorMessage(error.message || 'Error verifying code.');
    }
  };

  const handleInputChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value.replace(/\D/g, '');
    setCode(newCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) (prevInput as HTMLInputElement).focus();
    }
  };

  return (
    <AuthLayout title={title} subtitle={subtitle}>
      <form onSubmit={handleSubmit} className="auth-formm">
        <div className="form-group">
          <div className="code-inputs" style={{ display: 'flex', gap: '12px', width: '360px' }}>
            {code.map((digit, i) => (
              <input
                key={i}
                id={`code-${i}`}
                type="text"
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]*"
                value={digit}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value, i)}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, i)}
                style={{
                  width: '50px',
                  height: '50px',
                  textAlign: 'center',
                  fontSize: '24px',
                  borderRadius: '10px',
                  border: errorMessage ? '1px solid red' : '1px solid #ccc',
                }}
              />
            ))}
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </div>
        <button type="submit" className="auth-button" style={{ marginTop: '20px' }}>
          Verify
        </button>
      </form>
    </AuthLayout>
  );
};

export default TwoFactorAuth;
