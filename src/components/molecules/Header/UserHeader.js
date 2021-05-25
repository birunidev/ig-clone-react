import React from 'react';
import styled from 'styled-components';

export default function UserHeader() {
  return (
    <StyledDiv>
      <div className="ig-logo">
        <StyledUsername>
          Username
          <img className="user-dropdown" src="/icon/dropdown.svg" alt="" />
        </StyledUsername>
      </div>
      <div className="icon-wrapper">
        <img src="/icon/add.svg" alt="" />
        <img src="/icon/burger.svg" alt="" />
      </div>
    </StyledDiv>
  );
}

const StyledUsername = styled.p`
  margin: 0px;
  font-weight: bold;
  display: inline-block;
  .user-dropdown {
    width: 16px;
    transform: rotate(-90deg) translate(2px, 3px);
  }
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  .ig-logo {
    max-width: 100px;
  }
  img {
    display: inline-block;
    margin-right: 20px;
    width: 100%;
  }
  img:last-child {
    margin-right: 0px;
  }
  .icon-wrapper {
    display: flex;
  }
`;
