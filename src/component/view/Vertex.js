import styled from 'styled-components';
import { TYPE } from '../../constants/Type';

const bgColor = (tree, cwd) => {
  return tree === cwd.at(-1) ? '#848484' : '#213c4b';
};

const Prefix = (depth) => {
  let prefix = '';
  for (let i = 0; i < depth - 1; ++i) {
    prefix += '\u00a0 │ \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0';
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
          <CircleWrapper>
            {Prefix(child.getDepth())}
            <Circle>{child.getName()}</Circle>
          </CircleWrapper>
          {child.getChild()?.size ? <Vertex tree={child} cwd={cwd} /> : null}
        </VertexWrapper>
      ))}
    </>
  );
};

export default Vertex;

const VertexWrapper = styled.div`
  font-size: 25px;
  background-color: ${(props) => props.bgColor};
`;

const CircleWrapper = styled.div`
  display: flex;
`;

const Circle = styled.div`
  border: 1px solid yellow;
  border-radius: 100px;
  background-color: pink;
`;
