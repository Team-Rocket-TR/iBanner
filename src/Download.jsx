import React from 'react';

const Download = ({ imageURL, filename }) => (
  <>
    <a
      href={imageURL}
      download={filename}
    >
      <button type="button">다운로드</button>
    </a>
  </>
);

export default Download;
