import React from 'react';
import styled from 'styled-components';
import {
  BottomNav,
  Gap,
  Header,
  PostGrid,
  UserBio,
  UserHighlights,
  UserStats,
  UserTabs,
} from '../../components';

export default function User() {
  return (
    <StyledPage>
      <Header variant="follower-header" />
      <Gap vertical="10px" />
      <UserStats />
      <Gap vertical="10px" />
      <UserBio variant="follower" />
      <Gap vertical="10px" />
      <UserHighlights />
      <Gap vertical="10px" />
      <UserTabs isActive="grid" />
      <PostGrid />
      <Gap vertical="80px" />
      <BottomNav />
    </StyledPage>
  );
}
const StyledPage = styled.div``;
