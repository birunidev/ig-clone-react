import React from 'react';
import { Gap, Header, PostCard, Stories, BottomNav } from '../../components';

export default function Home() {
  return (
    <div>
      <Gap vertical="10px" />
      <Header variant="home-header" />
      <Gap vertical="10px" />
      <Stories />
      <Gap vertical="10px" />
      <PostCard imgSrc="/post-15.jpg" />
      <PostCard imgSrc="/post-10.jpg" />
      <PostCard imgSrc="/post-12.jpg" />
      <PostCard imgSrc="/post-11.jpg" />
      <PostCard imgSrc="/post-7.jpg" />
      <PostCard imgSrc="/post-4.jpg" />
      <PostCard imgSrc="/post-5.jpg" />

      <BottomNav />
      <Gap vertical="80px" />
    </div>
  );
}
