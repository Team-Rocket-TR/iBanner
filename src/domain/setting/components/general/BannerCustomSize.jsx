import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

// import { Input } from 'components/card';

const isNumber = (value) => {
  const bannerHeight = /^[0-9\b]+$/;
  return value && bannerHeight.test(value);
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const BannerCustomSize = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    if (!isNumber(e.target.value)) {
      return;
    }
    onChange({
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
      <Input
        id="standard-adornment-weight"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        endAdornment={<InputAdornment position="end">px</InputAdornment>}
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          'aria-label': `${name}`,
        }}
        maxLength="3"
      />
      <FormHelperText id="standard-weight-helper-text">{name}</FormHelperText>
    </FormControl>
  );
};

export default BannerCustomSize;
