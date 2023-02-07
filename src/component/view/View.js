import { useContext } from 'react';
import { Interation } from '../../App';
import styled from 'styled-components';
import { TYPE } from '../../constants/Type';
import Vertex from './Vertex';

const reqSearchMap = (depth, tree) => {
  <Vertex tree={tree} />
  
  // if (tree.getChild() === null || tree.getChild().size === 0) return;
  // // <Vertex name={tree.getName()}></Vertex>; // 이친구 왜 안나와여??
  // tree.getChild();
  // tree.getChild().forEach((element) => {
  //   reqSearchMap(depth + 1, element);
  // });
};

const View = () => {
  const { root } = useContext(Interation);
  return (
    <Canvas>
      <Vertex tree={root} />
    </Canvas>
  );
};

const Canvas = styled.div``;

export default View;
