import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin-right: .5em;
    padding: .375rem .75rem;
    background: #202020;
    border: 1px solid #313030;
    border-radius: .25rem;
    lineHeight: 1.5;
    fontSize: 1rem;
    color: white;
    cursor:pointer;
`;

const BannerSizeButton = ({
  ratio, width, height, onClick,
}) => (
  <>
    <Button type="button" id="BannerSizeButton" onClick={() => onClick({ w: width, h: height })}>{ratio}</Button>
  </>
);

export default BannerSizeButton;
