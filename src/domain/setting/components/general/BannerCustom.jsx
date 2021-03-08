import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
      <Grid container spacing={2}>
        {customs.map(({ name, value, placeholder }) => (
          <Grid
            item
            xs={6}
            key={name}
          >
            <BannerCustomSize
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BannerCustom;
