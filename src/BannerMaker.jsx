import React from 'react';

import AppHeader from './AppHeader';
import PreviewContainer from './PreviewContainer';
import BackgroundContainer from './BackgroundContainer';
import ContentContainer from './ContentContainer';
import ExportContainer from './ExportContainer';

const BannerMaker = () => (
  <>
    <header id="mainHeader">
      <AppHeader />
    </header>
    <article id="mainArticle">
      {/* 미리보기 */}
      <PreviewContainer />
    </article>
    <nav id="mainNav">
      {/* 설정 */}
      <BackgroundContainer />
      <ContentContainer />
      {/* 다운로드 */}
      <ExportContainer />
    </nav>
  </>
);

export default BannerMaker;
