import styled from 'styled-components';

const CanvasLayers = styled.section`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export default CanvasLayers;
