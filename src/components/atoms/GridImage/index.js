import React from 'react';
import styled from 'styled-components';

export default function GridImage({ imgSrc }) {
  return (
    <StyledWrapper>
      <img src={imgSrc} alt="" />
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
  img {
    width: 100%;
  }
`;
