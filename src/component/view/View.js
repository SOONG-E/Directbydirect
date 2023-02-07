import { useContext } from 'react';
import { Interation } from '../../App';
import styled from 'styled-components';
import Vertex from './Vertex';

const Root = ({ root }) => {
  return <RootWrapper>{root.getName()}</RootWrapper>;
};

const View = () => {
  const { root, cwd } = useContext(Interation);
  return (
    <Canvas>
      <Root root={root} />
      <Vertex tree={root} cwd={cwd} />
    </Canvas>
  );
};

export default View;

const Canvas = styled.div``;

const RootWrapper = styled.div`
  border: 1px solid black;
`;
