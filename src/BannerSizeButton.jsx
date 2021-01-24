import React from 'react';

const BannerSizeButton = (props, { width, height, onClick }) => (
  <>
    <button type="button" onClick={() => onClick({ w: width, h: height })}>{props}</button>
  </>
);

export default BannerSizeButton;
