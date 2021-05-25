import React from 'react';
import styled from 'styled-components';
import { BottomNav, Gap, PostGrid } from '../../components';

export default function Explore() {
  return (
    <StyledWrapper>
      <SearchInput placeholder="Search" />
      <Gap vertical="20px" />
      <PostGrid />
      <BottomNav />
    </StyledWrapper>
  );
}
const SearchInput = styled.input`
  border-radius: 6px;
  font-size: 14px;
  padding: 8px 12px;
  border: 1px solid #dbdbdb;
  outline: none;
  width: 90%;
  margin: 9px auto;
  display: block;

  &::placeholder {
    text-align: center;
  }
`;
const StyledWrapper = styled.div``;
