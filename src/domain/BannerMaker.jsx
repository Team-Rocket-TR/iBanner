import React, { useRef } from 'react';

import { useSelector } from 'react-redux';

import BannerMakerHeader from './BannerMakerHeader';
import PreviewContainer from './preview/PreviewContainer';
import SettingContainer from './setting/SettingContainer';
import ExportContainer from './export/ExportContainer';

import TextInputContainer from './setting/containers/TextInputContainer';

const BannerMaker = () => {
  const canvasRef = useRef(null);

  const theme = useSelector((state) => state.theme);
  const { selectedContentId } = useSelector((state) => state.contentLayer);

  return (
    <>
      <header id="mainHeader">
        <BannerMakerHeader theme={theme} />
      </header>
      <article id="mainArticle">
        <PreviewContainer canvasRef={canvasRef} />
      </article>
      <nav id="mainNav">
        <SettingContainer />
      </nav>
      <ExportContainer canvasRef={canvasRef} />
      {(selectedContentId)
        ? <TextInputContainer />
        : null}
    </>
  );
};

export default BannerMaker;
