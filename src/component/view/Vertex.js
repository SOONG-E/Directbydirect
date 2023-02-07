import styled from 'styled-components';
import { TYPE } from '../../constants/Type';

const bgColor = (tree, cwd) => {
  return (tree === cwd.at(-1)) ? '848484' : 'ffffff';
};

const Prefix = (depth) => {
  let prefix = '';
  for (let i = 0; i < depth - 1; ++i) {
    prefix += '│ \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0';
    // prefix += '│   ';
  }
  prefix += '└── ';
  return prefix;
};

const Vertex = ({ tree, cwd }) => {
  return (
    <>
      {[...tree.getChild().values()].map((child, idx) => (
        <VertexWrapper key={idx} bgColor={bgColor(child, cwd)}>
          {Prefix(child.getDepth())}
          {child.getName()}
          {child.getChild()?.size ? <Vertex tree={child} cwd={cwd} /> : null}
        </VertexWrapper>
      ))}
    </>
  );
};

export default Vertex;

const VertexWrapper = styled.div`
  border: 1px solid red;
  background-color: #${(props) => props.bgColor};
  font-size: 25px;
`;
