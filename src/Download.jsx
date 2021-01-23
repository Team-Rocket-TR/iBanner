import React from 'react';

const Download = ({ imageURL, filename }) => (
  <>
    <a
      href={imageURL}
      download={filename}
    >
      다운로드
    </a>
  </>
);

export default Download;
