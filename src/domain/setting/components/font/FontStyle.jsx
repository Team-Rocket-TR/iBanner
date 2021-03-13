import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

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
  { font: 'BMHANNA11yrs', fontName: '배민 한나체 11살' },
  { font: 'BMYEONSUNG', fontName: '배민 연성체' },
  { font: 'BMJUA', fontName: '배민 주아체' },
];

const FontStyle = ({ defaultValue, onChange }) => {
  const classes = useStyles();

  function handleChange(event) {
    const { value } = event.target;

    if (isEmpty(value)) return;

    onChange({ value });
  }

  return (
    <div>
      <Typography
        id="label-fontsize-slider"
        variant="h6"
        gutterBottom
      >
        글자 스타일
      </Typography>
      <Grid
        container
        spacing={1}
        alignItems="center"
      >
        <Grid item>
          <NativeSelect
            className={classes.root}
            value={defaultValue}
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
        </Grid>
        <Grid item xs>
          <NativeSelect
            className={classes.root}
            value={defaultValue}
            name="font-weight"
            inputProps={{ 'aria-label': 'font-weight' }}
          >
            <option value="normal">기본</option>
            <option value="bold">굵게</option>
          </NativeSelect>
          <FormHelperText>지원 안 할수도?</FormHelperText>
        </Grid>
      </Grid>
    </div>
  );
};

export default FontStyle;
