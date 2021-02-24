import React from 'react';

import { saveAs } from 'file-saver';

import Download from './components/Download';

const ExportContainer = ({ canvasRef }) => {
  const handleClick = () => {
    canvasRef.current.toBlob((blob) => {
      saveAs(blob, 'banner.png');
    });
  };

  return (
    <section>
      <Download onClick={handleClick} />
    </section>
  );
};

export default ExportContainer;
