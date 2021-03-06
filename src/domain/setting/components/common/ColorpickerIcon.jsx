import React from 'react';

import { AlphaPicker, TwitterPicker } from 'react-color';

// eslint-disable-next-line no-bitwise
const rgbToHex = ({ r, g, b }) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
};

const ColorpickerIcon = ({
  color, onChangeBackgroundcolor, onChangeAlpha,
}) => {
  const colors = [
    '#f44336', '#e84b63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#009688',
    '#4caf50', '#8bc34a', '#9bab9a', '#ff9800', '#ffee4b', '#ffffff', '#000000',
  ];

  const styles = {
    default: {
      card: {
        width: '100%',
        background: '#363636',
        border: '0 solid rgba(0,0,0,0.25)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        borderRadius: '4px',
        position: 'relative',
      },
      body: {
        padding: '15px 9px 9px 15px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
      },
      label: {
        fontSize: '18px',
        color: '#fff',
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent #fff transparent',
        position: 'absolute',
      },
      triangleShadow: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
        position: 'absolute',
      },
      hash: {
        display: 'none',
      },
      input: {
        display: 'none',
      },
      swatch: {
        width: '28px',
        height: '28px',
        float: 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0',
      },
      clear: {
        clear: 'both',
      },
    },
  };

  const handleChangeHexBackgroundColor = (e) => {
    const hex = e.target.value;
    const rgb = hexToRgb(hex);
    onChangeBackgroundcolor({ rgb });
  };

  return (
    <>
      <TwitterPicker
        color={color}
        colors={colors}
        triangle="hide"
        onChange={onChangeBackgroundcolor}
        width="90%"
        styles={styles}
      />
      <input type="text" name="hexBackgroundColor" value={rgbToHex(color)} onChange={handleChangeHexBackgroundColor} />
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
};
export default ColorpickerIcon;
