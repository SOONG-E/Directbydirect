import styled from 'styled-components';
import Vertex from './Vertex';

const Canvas = styled.div``;

const View = (name) => {
  return (
    <Canvas>
      <Vertex name='root' />
    </Canvas>
  );
};

export default View;
