import React from 'react';

import Switch from 'react-switch';

import { IoSunnySharp } from 'react-icons/io5';
import { RiMoonClearFill } from 'react-icons/ri';

const ThemeSwitch = ({ onChange, checked }) => (
  <Switch
    width={50}
    height={24}
    onColor="#f9f3f0"
    onHandleColor="#ecb399"
    onChange={onChange}
    checked={checked}
    checkedIcon={(
      <RiMoonClearFill
        size={24}
        color="#bfbfbf"
      />
    )}
    uncheckedIcon={(
      <IoSunnySharp
        size={24}
        color="#ffe6c0"
      />
    )}
  />
);

export default ThemeSwitch;
