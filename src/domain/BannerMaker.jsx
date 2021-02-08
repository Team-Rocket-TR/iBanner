import React from 'react';
import { useSelector } from 'react-redux';

import BannerMakerHeader from './BannerMakerHeader';
import PreviewContainer from './preview/PreviewContainer';
import SettingContainer from './setting/SettingContainer';
import ExportContainer from './export/ExportContainer';

const BannerMaker = () => {
  const mainBackgroundColor = useSelector((state) => state.mainBackgroundColor);
  const mainNavBackgroundColor = useSelector((state) => state.mainNavBackgroundColor);

  return (
    <>
      <header id="mainHeader">
        <BannerMakerHeader />
      </header>
      <article id="mainArticle" style={{ background: mainBackgroundColor }}>
        {/* 미리보기 */}
        <PreviewContainer />
      </article>
      <nav id="mainNav" style={{ background: mainNavBackgroundColor }}>
        {/* 설정 */}
        <SettingContainer />
        {/* 다운로드 */}
        <ExportContainer />
      </nav>
    </>
  );
};

export default BannerMaker;
