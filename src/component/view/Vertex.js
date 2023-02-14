import { styled } from '@mui/material/styles';
// import { TYPE } from '../../constants/Type';
import { Box, Chip } from '@mui/material';


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
            <Chip label={child.getName()} />
          </CircleWrapper>
          {child.getChild()?.size ? <Vertex tree={child} cwd={cwd} /> : null}
        </VertexWrapper>
      ))}
    </>
  );
};

export default Vertex;
// {/* <Circle>{child.getName()}</Circle> */}

const VertexWrapper = styled(Box)`
  font-size: 25px;
  background-color: ${(props) => props.bgColor};
`;

const CircleWrapper = styled(Box)`
  display: flex;
`;

const Circle = styled(Box)`
  border: 1px solid yellow;
  border-radius: 100px;
  background-color: pink;
`;
