import React from 'react';
import styled from 'styled-components';

export default function PostCta() {
  return (
    <StyledWrapper>
      <StyledCtaWrapper>
        <button className="icon-only">
          <img src="/icon/heart.svg" alt="" />
        </button>
        <button className="icon-only">
          <img src="/icon/comment.svg" alt="" />
        </button>
        <button className="icon-only">
          <img src="/icon/share.svg" alt="" />
        </button>
      </StyledCtaWrapper>
      <StyledCtaWrapper>
        <button className="icon-only">
          <img src="/icon/bookmark.svg" alt="" />
        </button>
      </StyledCtaWrapper>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledCtaWrapper = styled.div`
  button {
    margin-right: 10px;
  }
  button:last-child {
    margin-right: 0px;
  }
`;
