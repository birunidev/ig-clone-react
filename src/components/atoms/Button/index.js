import React from 'react';
import styled from 'styled-components';

export default function Button({
  display,
  variant,
  size,
  onClick,
  label,
  type,
}) {
  return (
    <StyledButton
      type={type}
      display={display}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
}
const StyledButton = styled.button`
  padding: ${(props) => (props.size === 'small' ? '7px 0px' : '13px 0px')};
  text-size: ${(props) => (props.size === 'small' ? '13px' : '14px')};
  background: ${(props) => (props.variant === 'primary' ? '#1FA1FF' : 'white')};
  border: ${(props) =>
    props.variant === 'primary'
      ? '0.7px solid #1FA1FF'
      : '0.7px solid #CBCBCB;'};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  display: ${(props) => props.display || 'inline-block'};
  width: ${(props) => (props.display ? '100%' : 'inherit')};
  border-radius: ${(props) => (props.size === 'small' ? '3px' : '7px')};
  color: ${(props) => (props.variant === 'primary' ? 'white' : 'inherit')};
  font-weight: 500;
  cursor: pointer;

  &:active {
    background: ${(props) =>
      props.variant === 'primary' ? '#3797EF' : '#FCFCFC'};
  }
`;
