import React from 'react';

const isNumber = (value) => value || /^[0-9\b]+$/.test(value);

const styles = {
  label: {
    display: 'none',
  },
};

const FontSize = ({ fontSize, onChange }) => {
  function handleChange(event) {
    const { value } = event.target;

    if (!isNumber(value)) return;

    onChange({ value });
  }

  return (
    <>
      <label htmlFor="input-fontsize" style={styles.label}>Font size</label>
      <input
        type="text"
        name="fontsize"
        id="input-fontsize"
        placeholder="Font size"
        value={fontSize}
        onChange={handleChange}
      />
    </>
  );
};

export default FontSize;
