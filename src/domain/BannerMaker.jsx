import React, { useRef } from 'react';

import BannerMakerHeader from './BannerMakerHeader';
import PreviewContainer from './preview/PreviewContainer';
import SettingContainer from './setting/SettingContainer';
import ExportContainer from './export/ExportContainer';

const BannerMaker = () => {
  const canvasRef = useRef(null);

  return (
    <>
      <header id="mainHeader">
        <BannerMakerHeader />
      </header>
      <article id="mainArticle">
        {/* 미리보기 */}
        <PreviewContainer canvasRef={canvasRef} />
      </article>
      <nav id="mainNav">
        {/* 설정 */}
        <SettingContainer />
        {/* 다운로드 */}
        <ExportContainer canvasRef={canvasRef} />
      </nav>
    </>
  );
};

export default BannerMaker;
