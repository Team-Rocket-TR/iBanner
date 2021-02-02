import React from 'react';

import { AlphaPicker, TwitterPicker } from 'react-color';

const ColorpickerIcon = ({ color, onChangeBackgroundcolor, onChangeAlpha }) => {
  const colors = [
    '#f44336', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#009688',
    '#4caf50', '#8bc34a', '#ffee4b', '#ff9800', '#ffffff', '#000000',
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
        background: '#F0F0F0',
        height: '30px',
        width: '30px',
        borderRadius: '4px 0 0 4px',
        float: 'left',
        color: '#98A1A4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        width: '100px',
        fontSize: '14px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '28px',
        boxShadow: 'inset 0 0 0 1px #F0F0F0',
        boxSizing: 'content-box',
        borderRadius: '0 4px 4px 0',
        float: 'left',
        paddingLeft: '8px',
      },
      swatch: {
        width: '30px',
        height: '30px',
        float: 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0',
      },
      clear: {
        clear: 'both',
      },
    },
  };

  return (
    <>
      <TwitterPicker
        color={color}
        colors={colors}
        triangle="hide"
        onChange={onChangeBackgroundcolor}
        width="100%"
        styles={styles}
      />
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
