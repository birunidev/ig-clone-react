import React from 'react';
import styled from 'styled-components';

export default function UserTabs({ isActive }) {
  return (
    <StyledWrapper>
      <StyledButon isActive={isActive} variant="grid" className="icon-only">
        <img src="/icon/Grid.svg" alt="" />
      </StyledButon>
      <StyledButon isActive={isActive} variant="mention" className="icon-only">
        <img src="/icon/Mentions.svg" alt="" />
      </StyledButon>
    </StyledWrapper>
  );
}
const StyledButon = styled.button`
  width: 100%;
  border-bottom: 1px solid
    ${(props) => (props.isActive === props.variant ? 'black' : 'transparent')};
`;
const StyledWrapper = styled.div`
  display: flex;
`;
