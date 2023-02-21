import { styled } from '@mui/material/styles';
import { Box, Chip, Stack } from '@mui/material';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { TYPE } from '../../constants/Type';
import { useTheme } from '@mui/material/styles';
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';
import { useContext } from 'react';
import { Interaction } from '../../App';

const Root = ({ root }) => {
  const props = useContext(Interaction);
  return (
    <Chip
      icon={<FolderSpecialOutlinedIcon />}
      label={root.getName()}
      color={root === props.cwd.at(-1) ? 'object' : 'selectedObject'}
      onClick={(e) => onChangeDirectory([root, props], e)}
    />
  );
};

const onChangeDirectory = ([dest, {cwd, setCwd, record, setRecord}]) => {
  const queue = [cwd.at(-1)];
  const visited = new Set(queue);
  while (queue.length > 0) {
    const current = queue.shift();
    if (current == dest) {
      const root = cwd[0];
      const new_cwd = [dest];
      while (dest != root) {
        dest = dest.getParent();
        new_cwd.unshift(dest);
      }
      let i = 0;
      while (cwd[i] === new_cwd[i]) ++i;
      let add_command = 'cd ';
      setCwd(new_cwd);
      return;
    }
    const next = [...current.getChild().values(), current.getParent()];
    next.forEach((vertex) => {
      if (!visited.has(vertex)) {
        queue.push(vertex);
        visited.add(vertex);
      }
    });
  }
};

const ChipChild = ({ child }) => {
  const props = useContext(Interaction);
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
      color={child === props.cwd.at(-1) ? 'object' : 'selectedObject'}
      onClick={(e) => onChangeDirectory([child, props], e)}
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
      {tree === cwd.at(0) ? <Root root={tree} /> : null}
      {[...tree.getChild().values()].map((child, idx) => (
        <VertexWrapper key={idx}>
          <CircleWrapper>
            {Prefix(child.getDepth())}
            <ChipChild child={child} />
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
