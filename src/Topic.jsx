import React from 'react';

const Topic = ({ topic, onChange }) => {
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
      <br />
      <label>
        {topic || '배너의 제목을 입력해주세요!'}
      </label>
    </>
  );
};

export default Topic;
