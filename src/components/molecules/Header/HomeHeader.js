import React from 'react';
import styled from 'styled-components';

export default function HomeHeader() {
  return (
    <StyledDiv>
      <div className="ig-logo">
        <img src="/ig-logo.svg" alt="" />
      </div>
      <div className="icon-wrapper">
        <img src="/icon/add.svg" alt="" />
        <img src="/icon/heart.svg" alt="" />
        <img src="/icon/messenger.svg" alt="" />
      </div>
    </StyledDiv>
  );
}
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
