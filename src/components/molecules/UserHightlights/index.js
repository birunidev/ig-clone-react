import React from 'react';
import styled from 'styled-components';
import { Avatar, Gap } from '../../atoms';

export default function UserHighlights() {
  return (
    <StyledWrapper>
      <StyledHighlights>
        <Avatar isStory isOpen size="big" imgSrc="/post-6.jpg" />
        <Gap horizontal="10px" />

        <Avatar isStory isOpen size="big" imgSrc="/post-7.jpg" />
        <Gap horizontal="10px" />

        <Avatar isStory isOpen size="big" imgSrc="/post-8.jpg" />
      </StyledHighlights>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  padding: 0px 9px;
`;
const StyledHighlights = styled.div`
  display: -webkit-box;
  overflow-x: auto;
  white-space: nowrap !important;

  &::-webkit-scrollbar {
    opacity: 0;
  }
`;
