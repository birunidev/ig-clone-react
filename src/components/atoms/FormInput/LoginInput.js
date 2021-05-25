import React from 'react';
import styled from 'styled-components';

export default function LoginInput({
  placeholder,
  value,
  onChange,
  error,
  type,
}) {
  return (
    <StyledInput
      value={value}
      borderColor={error && '#FF4963'}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
}
const StyledInput = styled.input`
  background: #fafafa;
  border: 0.5px solid ${(props) => props.borderColor || 'rgba(0, 0, 0, 0.1)'};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 13px 15px;
  font-size: 14px;
  outline: none;
  width: 100%;
  display: block;
  &:focus {
    border: 1px solid #1fa1ff;
    background: white;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;
