import React from 'react';

import { useSelector } from 'react-redux';

import Download from './components/Download';

const ExportContainer = () => {
  const canvasRef = useSelector((state) => state.canvasRef);

  return (
    <section>
      <Download
        imageURL={canvasRef}
        filename="banner.png"
      />
    </section>
  );
};

export default ExportContainer;
