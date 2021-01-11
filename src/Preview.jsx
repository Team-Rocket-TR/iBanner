import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const BannerImage = styled.div` 
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    width: 500px;
    height: 500px;
    justify-content: center;
    align-items: center;
    
    .bannerFont {
      font-size: 1.5rem;
      align-items: center;
      justify-content: center;
    }
`;

const Preview = ({
  width = 250,
  height = 250,
  color,
  topic,
}) => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    ctx.font = '1.5rem Arial';
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(topic || '제목을 입력해주세요!', width / 2, height / 2);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = canvas.getContext('2d');
    draw(banner);
  }, [draw]);

  return (
    // <BannerImage style={divStyle}>
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
    />
    // </BannerImage>
  );
};

export default Preview;
