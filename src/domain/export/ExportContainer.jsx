import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import { downloadURI } from 'utils';

import { Download } from './components';

const FloatButtonArea = styled.div`
  position: absolute;
  right: calc(80px + .6em);
  bottom: 1.5em;
  z-index: 999;
`;

const ExportContainer = ({ canvasRef }) => {
  const dispatch = useDispatch();

  const {
    selectedContentId,
  } = useSelector((state) => state.contentLayer);

  function handleClick() {
    const uri = canvasRef.current.toDataURL();
    downloadURI({
      uri,
      name: 'banner.png',
    });
  }

  return (
    <FloatButtonArea>
      <Download onClick={handleClick} />
    </FloatButtonArea>
  );
};

export default ExportContainer;
