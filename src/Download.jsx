import React from 'react';

const Download = () => (
  <>
    <a href="myImage.png" download="myImage.png" onClick="download_img(this);">
      <button type="button">다운로드</button>
    </a>
  </>
);

export default Download;
