import React from 'react';

const BackgroundColorpicker = () => {
  const styles = {
    colorPalette: {
      position: 'absolute',
      top: '75%',
      width: '200px',
      height: '78px',
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 20px 5px',
    },
  };

  return (
    <div
      className="colorPalette"
      style={styles.colorPalette}
    />

  );
};

export default BackgroundColorpicker;
