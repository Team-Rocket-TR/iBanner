import React from 'react';

import { useSelector } from 'react-redux';

import Download from './Download';

const ExportContainer = () => {
  const canvasRef = useSelector((state) => state.canvasRef);

  return (
    <>
      <h2>Export Image</h2>
      <Download
        imageURL={canvasRef}
        filename="banner.png"
      />
    </>
  );
};

export default ExportContainer;
