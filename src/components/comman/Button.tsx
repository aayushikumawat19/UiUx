import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  text,
  onClick,
  type = 'button',
  link,
  className,
}) => {

  const baseStyles = 'bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md text-sm text-center inline-block py-2 px-4';

  if (link) {
    return (
      <Link
        to={link}
        className={`${baseStyles} ${className ?? ''}`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${className ?? ''}`}
    >
      {text}
    </button>
  );
};

export default Button;
