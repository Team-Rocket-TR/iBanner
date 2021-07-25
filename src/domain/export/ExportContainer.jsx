import React from 'react';

import styled from 'styled-components';

import { Download } from './components';

const FloatButtonArea = styled.div`
  position: absolute;
  bottom: 1.5em;
  right: calc(80px + .6em);
`;

export default function ExportContainer({ canvasRef }) {
  const downloadURI = ({ uri, name }) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
