import React from 'react';

import BannerMakerHeader from './BannerMakerHeader';
import PreviewContainer from './preview/PreviewContainer';
import SettingContainer from './setting/SettingContainer';
import ExportContainer from './export/ExportContainer';

const BannerMaker = () => (
  <>
    <header id="mainHeader">
      <BannerMakerHeader />
    </header>
    <article id="mainArticle">
      {/* 미리보기 */}
      <PreviewContainer />
    </article>
    <nav id="mainNav">
      {/* 설정 */}
      <SettingContainer />
      {/* 다운로드 */}
      <ExportContainer />
    </nav>
  </>
);

export default BannerMaker;
