import React from 'react';
import styled from 'styled-components';

export default function Avatar({ size, isStory, imgSrc, isOpen }) {
  return (
    <StyledWrapper size={size} isStory={isStory} isOpen={isOpen}>
      <StyledImgWrapper isStory={isStory} isOpen={isOpen}>
        <StyledImg src={imgSrc} alt="" />
      </StyledImgWrapper>
    </StyledWrapper>
  );
}
const StyledImg = styled.img`
  width: 100%;
`;
const StyledImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  border: ${(props) => (props.isStory ? '3px solid white' : 'none')};
`;
const StyledWrapper = styled.div`
  border-radius: 50%;
  background: ${(props) =>
    props.isStory && props.isOpen
      ? '#DCDCDC'
      : props.isStory && !props.isOpen
      ? 'linear-gradient(180deg, #de0046 0%, #f7a34b 100%)'
      : 'white'};
  padding: 2px;
  width: ${(props) => (props.size !== 'big' ? '30px' : '68px')};
  height: ${(props) => (props.size !== 'big' ? '30px' : '68px')};
`;
