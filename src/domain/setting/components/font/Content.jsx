import React from 'react';

const styles = {
  label: {
    display: 'none',
  },
};

const Content = ({ onChange }) => {
  function handleChange(event) {
    const { target } = event;
    onChange({ value: target.value });
  }

  return (
    <>
      <label htmlFor="input-title" style={styles.label}>Title</label>
      <input
        type="text"
        name="title"
        id="input-title"
        placeholder="Title"
        onChange={handleChange}
      />
    </>
  );
};

export default Content;
