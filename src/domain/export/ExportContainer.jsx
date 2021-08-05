import React from 'react';

import styled from 'styled-components';

import { downloadURI } from 'utils';

import { Download } from './components';

const FloatButtonArea = styled.div`
  position: absolute;
  right: calc(80px + .6em);
  bottom: 1.5em;
  z-index: 999;
`;

export default function ExportContainer({ canvasRef }) {
  const handleClick = () => {
    const uri = canvasRef.current.toDataURL();
    downloadURI({
      uri,
      name: 'banner.png',
    });
  };

  return (
    <FloatButtonArea>
      <Download onClick={handleClick} />
    </FloatButtonArea>
  );
}
