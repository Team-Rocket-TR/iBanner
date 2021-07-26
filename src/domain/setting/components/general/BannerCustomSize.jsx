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
    // width & height minValue limit
    if (parseInt(e.target.value, 10) <= 0) {
      e.target.value = 1;
    }
    // width & height maxLength limit
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.substr(0, 4);
    }
    onChange({
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <FormControl>
      <Input
        id={`standard-${name}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        endAdornment={<InputAdornment position="end">px</InputAdornment>}
        aria-describedby={`standard-${name}-helper-text`}
        inputProps={{
          'aria-label': `${name}`,
        }}
      />
      <FormHelperText
        id={`standard-${name}-helper-text`}
      >
        {name}
      </FormHelperText>
    </FormControl>
  );
};

export default BannerCustomSize;
