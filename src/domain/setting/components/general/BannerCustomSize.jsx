import React from 'react';

import { Input } from 'components/card';

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
    <Input
      type="text"
      name={name}
      value={value}
      maxLength="3"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default BannerCustomSize;
