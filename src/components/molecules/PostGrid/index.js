import React from 'react';
import styled from 'styled-components';
import { GridImage } from '../../atoms';

export default function PostGrid() {
  return (
    <StyledWrapper>
      <GridImage imgSrc="/post-1.jpg" />
      <GridImage imgSrc="/post-2.jpg" />
      <GridImage imgSrc="/post-3.jpg" />
      <GridImage imgSrc="/post-4.jpg" />
      <GridImage imgSrc="/post-5.jpg" />
      <GridImage imgSrc="/post-6.jpg" />
      <GridImage imgSrc="/post-7.jpg" />
      <GridImage imgSrc="/post-8.jpg" />
      <GridImage imgSrc="/post-9.jpg" />
      <GridImage imgSrc="/post-10.jpg" />
      <GridImage imgSrc="/post-11.jpg" />
      <GridImage imgSrc="/post-12.jpg" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
`;
