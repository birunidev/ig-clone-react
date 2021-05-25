import React from 'react';
import styled from 'styled-components';
import { Avatar, Gap } from '../../atoms';

export default function Stories() {
  return (
    <StyledWrapper>
      <StyledStoriesWrapper>
        <Gap horizontal="10px" />
        <Avatar size="big" imgSrc="post-1.jpg" isStory />
        <Gap horizontal="10px" />
        <Avatar size="big" imgSrc="post-2.jpg" isStory />
        <Gap horizontal="10px" />
        <Avatar size="big" imgSrc="post-3.jpg" isStory />
        <Gap horizontal="10px" />
        <Avatar size="big" imgSrc="post-4.jpg" isStory />
        <Gap horizontal="10px" />
        <Avatar size="big" imgSrc="post-5.jpg" isStory />
        <Gap horizontal="10px" />
        <Avatar size="big" imgSrc="post-6.jpg" isStory />
        <Gap horizontal="10px" />
        <Avatar size="big" imgSrc="post-7.jpg" isStory />
      </StyledStoriesWrapper>
    </StyledWrapper>
  );
}
const StyledStoriesWrapper = styled.div`
  display: -webkit-box;
  overflow-x: auto;
  white-space: nowrap !important;

  &::-webkit-scrollbar {
    opacity: 0;
  }
`;
const StyledWrapper = styled.div``;
