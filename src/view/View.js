import styled from 'styled-components';
import Vertex from './Vertex';

const Canvas = styled.div``;

const View = () => {
  return (
    <Canvas>
      <Vertex name='root' />
    </Canvas>
  );
};

export default View;
