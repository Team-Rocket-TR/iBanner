import React from 'react';

import Typography from '@material-ui/core/Typography';

import BannerSizeRatioButton from './BannerSizeRatioButton';

const BannerSizeButtons = ({ width, onClick }) => {
  const bannerRatios = [
    ['1:1', width, width],
    ['2:1', width, (width / 2)],
    ['4:3', width, Math.floor(width * (3 / 4))],
    ['16:9', width, Math.floor(width * (9 / 16))],
  ];

  return (
    <>
      <Typography
        id="label-fontsize-slider"
        variant="h6"
        gutterBottom
      >
        가로세로비율
      </Typography>
      {bannerRatios.map((props) => {
        const [ratio, w, h] = props;
        return (
          <BannerSizeRatioButton
            width={w}
            height={h}
            ratio={ratio}
            key={ratio}
            onClick={onClick}
          />
        );
      })}
    </>
  );
};

export default BannerSizeButtons;
