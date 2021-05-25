import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <div>
        <img src="/ig-logo.svg" alt="" />
        <p>This page is under development</p>
        <Link style={{ color: '#1FA1FF', textDecoration: 'none' }} to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
