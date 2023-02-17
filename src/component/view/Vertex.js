import { styled } from '@mui/material/styles';
import { Box, Chip, Stack } from '@mui/material';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { TYPE } from '../../constants/Type';
import { useTheme } from '@mui/material/styles';
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';
import Builtin from '../../model/Builitin';

const Root = ({ root, cwd }) => {
  const theme = useTheme();
  return (
    <Chip
      icon={<FolderSpecialOutlinedIcon />}
      label={root.getName()}
      color={root === cwd.at(-1) ? 'object' : 'selectedObject'}
    />
  );
};

const onChangeDirectory = (tree) => {
  const queue = [];
  const visited = [];
  queue.push(tree);
};

const ChipChild = ({ child, cwd }) => {
  return (
    <Chip
      icon={
        child.getType() == TYPE.DIR ? (
          <FolderOpenOutlinedIcon fontSize='small' />
        ) : (
          <InsertDriveFileOutlinedIcon fontSize='small' />
        )
      }
      label={child.getName()}
      color={child === cwd.at(-1) ? 'object' : 'selectedObject'}
      onClick={(e) => onChangeDirectory(child, e)}
    />
  );
};

const Prefix = (depth) => {
  let prefix = '';
  for (let i = 0; i < depth - 1; ++i) {
    prefix +=
      '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0';
    // prefix += '│   ';
  }
  prefix += '└── ';
  return prefix;
};

const Vertex = ({ tree, cwd }) => {
  const theme = useTheme();
  return (
    <Stack spacing={2}>
      {tree === cwd.at(0) ? <Root root={tree} cwd={cwd} /> : null}
      {[...tree.getChild().values()].map((child, idx) => (
        <VertexWrapper key={idx}>
          <CircleWrapper>
            {Prefix(child.getDepth())}
            <ChipChild child={child} cwd={cwd} />
          </CircleWrapper>
          {child.getChild()?.size ? <Vertex tree={child} cwd={cwd} /> : null}
        </VertexWrapper>
      ))}
    </Stack>
  );
};

export default Vertex;

const VertexWrapper = styled(Box)`
  font-size: 25px;
`;

const CircleWrapper = styled(Box)`
  display: flex;
`;
