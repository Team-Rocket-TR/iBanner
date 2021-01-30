import styled from 'styled-components';

const Layers = styled.section`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export default Layers;
