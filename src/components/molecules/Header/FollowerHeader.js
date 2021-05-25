import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function FollowerHeader() {
  return (
    <StyledDiv>
      <Link to="/">
        <button className="icon-only">
          <img src="/icon/dropdown.svg" alt="" />
        </button>
      </Link>
      <StyledUsername>Username</StyledUsername>
      <div className="icon-wrapper">
        <img src="/icon/notifiations.svg" alt="" />
        <img src="/icon/more.svg" alt="" />
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
