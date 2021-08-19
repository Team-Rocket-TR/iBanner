import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectedTextId } from 'slice';

import styled from 'styled-components';

import { downloadURI } from 'utils';

import { Download, Complete } from './components';

const FloatButtonArea = styled.div`
  position: absolute;
  right: calc(80px + .6em);
  bottom: 1.5em;
  z-index: 999;
`;

const ExportContainer = ({ canvasRef }) => {
  const dispatch = useDispatch();

  const { selectedTextId } = useSelector((state) => state.textLayer);

  function handleClickComplete() {
    dispatch(setSelectedTextId(null));
  }

  function handleClickDownload() {
    const uri = canvasRef.current.toDataURL();
    downloadURI({
      uri,
      name: document.getElementById('saveAsFilename').value,
    });
  }

  return (
    <FloatButtonArea>
      {(selectedTextId)
        ? <Complete onClick={handleClickComplete} />
        : <Download onClick={handleClickDownload} />}

    </FloatButtonArea>
  );
};

export default ExportContainer;
