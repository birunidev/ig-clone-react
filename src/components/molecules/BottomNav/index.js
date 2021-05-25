import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function BottomNav() {
  return (
    <StyledWrapper>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            <img src="/icon/Home.svg" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" activeClassName="active">
            <img src="/icon/Search.svg" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/reels" activeClassName="active">
            <img src="/icon/Reels.svg" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" activeClassName="active">
            <img src="/icon/Shop.svg" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active" className="avatar">
            <img src="/avatar.png" alt="" />
          </NavLink>
        </li>
      </ul>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0px;
  right: 0px;
  background: white;
  padding: 0px 9px;
  border-top: 1px solid #dadada;
  ul {
    padding: 0px;
    list-style: none;
    display: flex;
    justify-content: space-between;

    align-items: center;
  }
  a {
    overflow: hidden;
    opacity: 0.6;
  }
  .avatar {
    opacity: 1;
  }
  a.active {
    opacity: 1;
  }
  img {
    width: 25px;
  }
`;
