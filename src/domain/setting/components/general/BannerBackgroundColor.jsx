import React from 'react';

import Typography from '@material-ui/core/Typography';

import { rgb2hex, hex2rgb } from 'utils';

import styled from 'styled-components';

const ColorSelector = styled.input`
  width: 2.5rem;
  height: 2.5rem;
`;

const BannerBackgroundColor = ({ color, onChange }) => {
  const colorHex = rgb2hex({ ...color });

  function handleChange({ target }) {
    const { value } = target;

    const colorObject = {
      rgb: hex2rgb(value),
    };

    onChange(colorObject);
  }

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
      >
        배너 바탕색
      </Typography>
      <ColorSelector
        type="color"
        name="canvas-background-color"
        value={colorHex}
        onChange={handleChange}
      />
      {' '}
      {colorHex}
    </>
  );
};

export default BannerBackgroundColor;
