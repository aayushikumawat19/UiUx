import React from "react";
import type { ChangeEvent } from "react";

type Option = {
  value: string;
  label: string;
};

type FormFieldProps = {
  label: string;
  id: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  autoComplete?: string;
  readOnly?: boolean;
  options?: Option[];
  error?: string;
  className?: string;
};

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = "text",
  value,
  placeholder,
  onChange,
  autoComplete = "off",
  readOnly = false,
  options = [],
  error,
  className = "",
}) => {
  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      {type === "select" ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={`form-input ${error ? "border-red-500" : ""}`}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          autoComplete={autoComplete}
          readOnly={readOnly}
          onChange={onChange}
          className={`form-input ${error ? "border-red-500" : ""}`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          readOnly={readOnly}
          onChange={onChange}
          className={`form-input ${error ? "border-red-500" : ""}`}
        />
      )}

      {error && (
        <p className="error-message text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormField;
