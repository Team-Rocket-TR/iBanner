import React from 'react';

import { saveAs } from 'file-saver';

import styled from 'styled-components';

import Download from './components/Download';

const FloatButtonArea = styled.div`
  position: absolute;
  bottom: 1em;
  right: calc(80px + .6em);
`;

const ExportContainer = ({ canvasRef }) => {
  const handleClick = () => {
    canvasRef.current.toBlob((blob) => {
      saveAs(blob, 'banner.png');
    });
  };

  return (
    <FloatButtonArea>
      <Download onClick={handleClick} />
    </FloatButtonArea>
  );
};

export default ExportContainer;
