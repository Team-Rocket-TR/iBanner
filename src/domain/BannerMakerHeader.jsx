import React from 'react';

const BannerMakerHeader = ({ theme }) => {
  return (
    <>
      <img
        id='iBanner_logo'
        src={
          theme == 'light'
            ? '/image/iBanner_logo_black.png'
            : '/image/iBanner_logo_white.png'
        }
      />
      <h5>⚙️ Settings</h5>
    </>
  );
};

export default BannerMakerHeader;
