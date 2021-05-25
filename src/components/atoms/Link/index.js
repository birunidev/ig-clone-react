import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function CustomLink({ to, text, align }) {
  return (
    <StyledLink align={align}>
      <Link
        style={{
          color: '#3797ef',
          textDecoration: 'none',
        }}
        to={to || '/'}
      >
        {text}
      </Link>
    </StyledLink>
  );
}
const StyledLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: ${(props) => props.align || 'left'};
`;
