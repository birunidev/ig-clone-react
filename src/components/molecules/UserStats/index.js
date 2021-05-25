import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../../atoms';

const UserStat = ({ number, label }) => {
  return (
    <StyledUserStat>
      <p>{number}</p>
      <span>{label}</span>
    </StyledUserStat>
  );
};

export default function UserStats() {
  return (
    <StyledWrapper>
      <div className="user-avatar">
        <Avatar isStory size="big" imgSrc="/avatar.png" />
      </div>
      <div className="user-stats">
        <UserStat number={230} label="Posts" />
        <UserStat number={`14.4k`} label="Followers" />
        <UserStat number={`2k`} label="Following" />
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  padding: 0px 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .user-avatar {
    width: 87px;
  }
  .user-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 60%;
  }
`;
const StyledUserStat = styled.div`
  text-align: center;
  margin-right: 15px;
  p {
    margin: 0px;
    font-weight: 600;
  }
  span {
    font-size: 13px;
  }
`;
