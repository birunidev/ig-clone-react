import React from 'react';
import styled from 'styled-components';
import { Avatar } from '..';

export default function UserPost() {
  return (
    <StyledWrapper>
      <div className="avatar-wrapper">
        <Avatar imgSrc="avatar.png" size="small" />
        <p>birunidev</p>
      </div>
      <div>
        <StyledBurger>
          <img src="/icon/more.svg" alt="" />
        </StyledBurger>
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 9px;
  .avatar-wrapper {
    display: flex;
    align-items: center;
  }
  p {
    margin: 0px;
    font-size: 12px;
    font-weight: 600;
    margin-left: 8px;
  }
`;
const StyledBurger = styled.div`
  background: none;
  cursor: pointer;
  outline: none;
`;
