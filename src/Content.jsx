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
      <label htmlFor="input-content" style={styles.label}>Content</label>
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
