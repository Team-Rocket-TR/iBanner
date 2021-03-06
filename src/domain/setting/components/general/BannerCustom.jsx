import React from 'react';

import Typography from '@material-ui/core/Typography';
import BannerCustomSize from './BannerCustomSize';

const BannerCustom = ({ width, height, onChange }) => {
  const customs = [
    {
      name: 'width',
      value: width,
      placeholder: 'Banner Width',
    },
    {
      name: 'height',
      value: height,
      placeholder: 'Banner Height',
    },
  ];

  return (
    <>
      <Typography
        id="label-fontsize-slider"
        variant="h6"
        gutterBottom
      >
        크기
      </Typography>
      {customs.map(({ name, value, placeholder }) => (
        <BannerCustomSize
          key={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      ))}
    </>
  );
};

export default BannerCustom;
