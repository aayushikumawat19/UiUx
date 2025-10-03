// components/comman/FormField.tsx
import React from "react";
import type {ChangeEvent} from "react";
type Option = {
  value: string;
  label: string;
};

type FormFieldProps = {
  label: string;
  id: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errorMessage?: string;
  autoComplete?: string;
  readOnly?: boolean;
  options?: Option[]; // For select type
};

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type,
  value,
  placeholder,
  onChange,
  errorMessage,
  autoComplete = "off",
  readOnly = false,
  options = [],
}) => {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {type === "select" ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={`form-input ${errorMessage ? "border-red-500" : ""}`}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          readOnly={readOnly}
          onChange={onChange}
          className={`form-input ${errorMessage ? "border-red-500" : ""}`}
        />
      )}
      {errorMessage && (
        <p className="error-message text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormField;
