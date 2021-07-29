import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import BannerMakerHeader from './BannerMakerHeader';

import PreviewContainer from './preview/PreviewContainer';

import SettingContainer from './setting/SettingContainer';

import TextInputContainer from './setting/TextInputContainer';

import ExportContainer from './export/ExportContainer';

const BannerMaker = () => {
  const theme = useSelector((state) => state.theme);

  const canvasRef = useRef(null);
  return (
    <>
      <header id='mainHeader'>
        <BannerMakerHeader theme={theme} />
      </header>
      <article id='mainArticle'>
        <PreviewContainer canvasRef={canvasRef} />
        <TextInputContainer />
      </article>
      <nav id='mainNav'>
        <SettingContainer />
      </nav>
      <ExportContainer canvasRef={canvasRef} />
    </>
  );
};

export default BannerMaker;
