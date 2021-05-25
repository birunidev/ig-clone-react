import React from 'react';
import styled from 'styled-components';
import { Button, Gap } from '../../atoms';
export default function UserBio({ variant }) {
  return (
    <StyledWrapper>
      <p className="username">birunidev</p>
      <p className="bio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
      <a href="google.com">Link goes here</a>
      <Gap vertical="10px" />
      {variant === 'follower' ? (
        <StyledButtons>
          <Button
            label="Following"
            variant="white"
            size="small"
            display="block"
          />
          <Button
            label="Message"
            variant="white"
            size="small"
            display="block"
          />
          <Button label="Email" variant="white" size="small" display="block" />
        </StyledButtons>
      ) : (
        <Button
          label="Edit Profile"
          variant="white"
          size="small"
          display="block"
        />
      )}
    </StyledWrapper>
  );
}
const StyledButtons = styled.div`
  display: flex;
  button {
    margin-right: 5px;
  }
  button:last-child {
    margin-right: 0px;
  }
`;
const StyledWrapper = styled.div`
  padding: 0px 9px;
  .username {
    font-weight: 600;
    font-size: 14px;
  }
  .bio,
  a {
    font-size: 12px;
  }
  p {
    margin: 0px;
  }
  a {
    color: #004c8b;
    text-decoration: none;
  }
`;
