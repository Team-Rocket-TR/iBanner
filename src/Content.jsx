import React from 'react';

const Content = ({ onChange }) => {
  function handleChange(event) {
    const { target } = event;
    onChange({ value: target.value });
  }

  return (
    <>
      <label htmlFor="input-content">Content</label>
      <br />
      <input
        type="text"
        name="content"
        id="input-content"
        placeholder="banner content"
        onChange={handleChange}
      />
    </>
  );
};

export default Content;
