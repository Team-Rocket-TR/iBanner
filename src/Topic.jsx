import React from 'react';

const Topic = ({ onChange }) => {
  function handleChange(event) {
    const { target } = event;
    onChange({ value: target.value });
  }

  return (
    <>
      <label htmlFor="input-topic">topic</label>
      <br />
      <input
        type="text"
        name="topic"
        id="input-topic"
        onChange={handleChange}
      />
    </>
  );
};

export default Topic;
