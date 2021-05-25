import React from 'react';
import styled from 'styled-components';
import { Avatar, UserPost } from '../../atoms';
import PostCta from '../PostCta';

const Comment = () => {
  return (
    <StyledComments>
      <p>
        <span style={{ marginRight: 3 }}>randomguy</span> it's awesome girl !!
      </p>
    </StyledComments>
  );
};

export default function PostCard({ imgSrc }) {
  return (
    <StyledWrapper>
      <UserPost />
      <StyledPostImg src={imgSrc || '/post-1.jpg'} />
      <StyledDetail>
        <PostCta />
        <StyledLikes>100 Likes</StyledLikes>
        <StyledCaption>
          <span className="username">birunidev</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt{' '}
          <button className="more-btn">...more</button>
        </StyledCaption>
        <Comment />
        <Comment />

        <StyledAddComment>
          <Avatar imgSrc="/post-2.jpg" size="small" />
          <StyledInput placeholder="Add Comment..." />
          <StyledSubmit>Post</StyledSubmit>
        </StyledAddComment>
      </StyledDetail>
    </StyledWrapper>
  );
}
const StyledSubmit = styled.button`
  background: none;
  border: none;
  color: #3797ef;
  outline: none;
`;
const StyledAddComment = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledInput = styled.input`
  bacground: none;
  border: none;
  font-size: 12px;
  outline: none;
  padding-left: 10px;
  width: 100%;
`;
const StyledWrapper = styled.div`
  border-top: 1px solid #ededed;
`;
const StyledPostImg = styled.img`
  width: 100%;
`;
const StyledComments = styled.div`
  span {
    font-weight: 600;
  }
  p {
    margin: 5px 0px;
    font-size: 12px;
  }
`;
const StyledLikes = styled.p`
  font-weight: 600;
  font-size: 12px;
  margin: 5px 0px;
`;
const StyledCaption = styled.p`
  font-size: 12px;
  .username {
    font-weight: 600;
    margin-right: 3px;
  }
  .more-btn {
    display: inline-block;
    padding: 0px;
    background: none;
    border: none;
    outline: none;
    color: #afafaf;
  }
`;
const StyledDetail = styled.div`
  padding: 5px 9px;
`;
