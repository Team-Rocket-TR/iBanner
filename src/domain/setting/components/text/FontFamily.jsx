import React from 'react';

import Observer from 'fontfaceobserver';

import { makeStyles } from '@material-ui/core/styles';

import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';

import { isBlank } from 'utils';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const fontCollection = {
  // 공통
  common: {
    name: '기본',
    fonts: [
      { font: 'Arial, sans-serif', fontName: 'Arial' },
      { font: 'Verdana, sans-serif', fontName: 'Verdana' },
      { font: 'Garamond, serif', fontName: 'Garamond' },
      { font: 'Courier New, monospace', fontName: 'Courier New' },
      { font: 'Brush Script MT, cursive', fontName: 'Brush Script' },
    ],
  },
  // 배민
  baemin: {
    name: '배달의민족',
    fonts: [
      { font: 'BMDOHYEON', fontName: '도현체' },
      { font: 'BMEULJIRO', fontName: '을지로체' },
      { font: 'BMEULJIRO10yearslater', fontName: '을지로10년후체' },
      { font: 'BMHANNAPro', fontName: '한나체Pro' },
      { font: 'BMYEONSUNG', fontName: '연성체' },
      { font: 'BMJUA', fontName: '배민 주아체' },
    ],
  },
};

const FontFamily = ({ defaultValue, onChange }) => {
  const classes = useStyles();

  function handleChange(event) {
    const { value } = event.target;
    if (isBlank(value)) {
      return;
    }

    const commonFonts = fontCollection.common.fonts.reduce((accumulator, currentFont) => {
      const { font } = currentFont;
      accumulator.push(font);
      return accumulator;
    }, []);

    if (commonFonts.includes(value)) {
      onChange({ value });
      return;
    }

    const bodyFont = new Observer(value, {
      weight: 'normal',
    });

    bodyFont.load().then(() => {
      onChange({ value });
    });
  }

  return (
    <>
      <NativeSelect
        className={classes.root}
        value={defaultValue}
        onChange={handleChange}
        name="font-style"
        inputProps={{ 'aria-label': 'font-style' }}
      >
        {Object.keys(fontCollection).map((key) => {
          const { name, fonts } = fontCollection[key];
          return (
            <optgroup
              key={key}
              label={name}
            >
              {fonts.map(({ font, fontName }) => (
                <option
                  key={font}
                  value={font}
                >
                  {fontName}
                </option>
              ))}
            </optgroup>
          );
        })}
      </NativeSelect>
      <FormHelperText>마음에 드는 폰트를 선택해주세요!</FormHelperText>
    </>
  );
};

export default FontFamily;
