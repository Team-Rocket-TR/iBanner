import React from 'react';

const Content = ({ onChange }) => {
  function handleChange(event) {
    const { target } = event;
    onChange({ value: target.value });
  }

  return (
    <>
      <label htmlFor="input-Content">Content</label>
      <br />
      <input
        type="text"
        name="Content"
        id="input-Content"
        onChange={handleChange}
      />
    </>
  );
};

export default Content;
