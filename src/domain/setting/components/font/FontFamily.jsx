import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';

const isEmpty = (value) => !value;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const fonts = [
  { font: 'BMDOHYEON', fontName: '배민 도현체' },
  { font: 'BMEULJIRO', fontName: '배민 을지로체' },
  { font: 'BMEULJIRO10yearslater', fontName: '배민 을지로10년후체' },
  { font: 'BMHANNAPro', fontName: '배민 한나체 프로' },
  { font: 'BMYEONSUNG', fontName: '배민 연성체' },
  { font: 'BMJUA', fontName: '배민 주아체' },
];

const FontFamily = ({ defaultValue, onChange }) => {
  const classes = useStyles();

  function handleChange(event) {
    const { value } = event.target;

    if (isEmpty(value)) return;

    onChange({ value });
  }

  return (
    <>
      <NativeSelect
        className={classes.root}
        value={defaultValue}
        defaultValue={defaultValue}
        onChange={handleChange}
        name="font-style"
        inputProps={{ 'aria-label': 'font-style' }}
      >
        {fonts.map(({ font, fontName }) => (
          <option
            key={font}
            value={font}
          >
            {fontName}
          </option>
        ))}
      </NativeSelect>
      <FormHelperText>마음에 드는 폰트를 선택해주세요!</FormHelperText>
    </>
  );
};

export default FontFamily;
