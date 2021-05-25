import React from 'react';
import LoginInput from './LoginInput';
import UserInput from './UserInput';

export default function FormInput({
  variant,
  placeholder,
  onChange,
  value,
  error,
  type,
}) {
  if (variant === 'login-form') {
    return (
      <LoginInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        error={error}
      />
    );
  } else {
    return <UserInput />;
  }
}
