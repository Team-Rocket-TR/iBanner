import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const isNumber = (value) => {
  const bannerHeight = /^[0-9\b]+$/;
  return value && bannerHeight.test(value);
};

const BannerCustomSize = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
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
    <FormControl>
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
