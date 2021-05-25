import React from 'react';
import FollowerHeader from './FollowerHeader';
import HomeHeader from './HomeHeader';
import UserHeader from './UserHeader';

export default function Header({ variant }) {
  switch (variant) {
    case 'home-header':
      return <HomeHeader />;
    case 'user-header':
      return <UserHeader />;
    case 'follower-header':
      return <FollowerHeader />;

    default:
      return <div></div>;
  }
}
