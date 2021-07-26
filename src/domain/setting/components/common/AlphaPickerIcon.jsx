import React from 'react';

import { AlphaPicker } from 'react-color';

// eslint-disable-next-line no-bitwise
const AlphaPickerIcon = ({
  color, onChangeAlpha,
}) => (
  <>
    {onChangeAlpha
      ? (
        <AlphaPicker
          color={color}
          onChange={onChangeAlpha}
          width="100%"
        />
      )
      : null}
  </>
);
export default AlphaPickerIcon;
