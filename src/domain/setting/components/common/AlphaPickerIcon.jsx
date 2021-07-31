import React from 'react';

import { AlphaPicker } from 'react-color';

const AlphaPickerIcon = ({ color, onChangeAlpha }) => (
  <>
    {onChangeAlpha ? (
      <AlphaPicker
        width="100%"
        color={color}
        onChange={onChangeAlpha}
      />
    ) : null}
  </>
);
export default AlphaPickerIcon;
