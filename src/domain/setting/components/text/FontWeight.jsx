import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';

import { isBlank } from 'utils';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const FontWeight = ({ defaultValue, onChange }) => {
  const classes = useStyles();

  function handleChange(event) {
    const { value } = event.target;
    if (isBlank(value)) {
      return;
    }

    onChange({ value });
  }

  return (
    <>
      <NativeSelect
        className={classes.root}
        value={defaultValue}
        onChange={handleChange}
        name="font-weight"
        inputProps={{ 'aria-label': 'font-weight' }}
      >
        <option value="normal">기본</option>
        <option value="bold">굵게</option>
      </NativeSelect>
      <FormHelperText>기본 폰트만</FormHelperText>
    </>
  );
};

export default FontWeight;
