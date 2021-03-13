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
        defaultValue="normal"
        onChange={handleChange}
        name="font-weight"
        inputProps={{ 'aria-label': 'font-weight' }}
      >
        <option value="normal">기본</option>
        <option value="bold">굵게</option>
      </NativeSelect>
      <FormHelperText>지원 안 할수도?</FormHelperText>
    </>
  );
};

export default FontFamily;
