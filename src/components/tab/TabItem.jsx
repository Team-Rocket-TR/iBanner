import React from 'react';

import styled from 'styled-components';

const Tab = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  ${(props) => props.active && `
    border: solid #000;
    border-width: 1px 1px 0 1px;
  `}
`;

const TabItem = ({
  label,
  active,
  onClick,
}) => (
  <Tab
    active={active}
    onClick={() => onClick(label)}
  >
    {label}
  </Tab>
);

export default TabItem;
