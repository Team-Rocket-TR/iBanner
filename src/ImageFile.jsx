import React from 'react';

const ImageFile = ({ onChange }) => {
  function handleChange(event) {
    const file = event.target.files[0];
    onChange({ file });
  }

  return (
    <input
      type="file"
      onChange={handleChange}
    />
  );
};

export default ImageFile;
