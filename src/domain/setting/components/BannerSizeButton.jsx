import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: white;
    background: #636363;
    margin: 5% 5% 5% 0%;
    padding: .375rem .75rem;
    border: 1px solid #313030;
    border-radius: .25rem;
    fontSize: 1rem;
    lineHeight: 1.5;
`;

const BannerSizeButton = ({
  ratio, width, height, onClick,
}) => (
  <>
    <Button type="button" id="BannerSizeButton" onClick={() => onClick({ w: width, h: height })}>{ratio}</Button>
  </>
);

export default BannerSizeButton;
