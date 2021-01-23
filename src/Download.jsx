import React from 'react';

const Download = ({ imageURL, filename }) => (
  <>
    <a
      href={imageURL}
      download={filename}
    >
      Download
    </a>
  </>
);

export default Download;
