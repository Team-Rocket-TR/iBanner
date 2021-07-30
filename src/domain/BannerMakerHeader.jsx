import React from 'react';

const BannerMakerHeader = ({ theme }) => (
  <img
    id="iBanner_logo"
    alt="iBanner Logo"
    src={
      theme === 'light'
        ? '/image/iBanner_logo_black.png'
        : '/image/iBanner_logo_white.png'
    }
  />
);

export default BannerMakerHeader;
