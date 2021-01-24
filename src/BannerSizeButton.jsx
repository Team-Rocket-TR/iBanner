import React from 'react';

const BannerSizeButton = ({
  ratio, width, height, onClick,
}) => (
  <>
    <button type="button" onClick={() => onClick({ w: width, h: height })}>{ratio}</button>
  </>
);

export default BannerSizeButton;
