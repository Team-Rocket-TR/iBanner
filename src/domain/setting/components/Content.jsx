import React from 'react';

const Content = ({ onChange }) => {
  const styles = {
    label: {
      display: 'none',
    },
  };

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
