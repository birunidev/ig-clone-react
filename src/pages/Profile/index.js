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

export default function Profile() {
  return (
    <StyledPage>
      <Header variant="user-header" />
      <Gap vertical="10px" />
      <UserStats />
      <Gap vertical="10px" />
      <UserBio />
      <Gap vertical="10px" />
      <UserHighlights />
      <Gap vertical="10px" />
      <UserTabs isActive="grid" />
      <Gap vertical="12px" />

      <PostGrid />
      <Gap vertical="80px" />
      <BottomNav />
    </StyledPage>
  );
}
const StyledPage = styled.div``;
