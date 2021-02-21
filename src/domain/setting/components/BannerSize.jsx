import React from 'react';

const BannerSize = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
  const handleChange = (e) => {
    const bannerHeight = /^[0-9\b]+$/;
    if (e.target.value || bannerHeight.test(e.target.value)) {
      onChange({ name, value });
    }
  };

  // const isNumber = (value) => {
  //   const bannerSize = /^[0-9\b]+$/;
  //   if (e.target.value || bannerSize.test(e.target.value)) {
  //     dispatch(setWidth(e.target.value));
  //   }
  // };
  return (
    <input
      type="text"
      name={name}
      value={value}
      maxLength="3"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default BannerSize;
