import { styled } from '@mui/material/styles';
import { Box, Chip, Grid, Stack } from '@mui/material';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { TYPE } from '../../constants/Type';
import { useTheme } from '@mui/material/styles';
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';
import { useContext } from 'react';
import { Interaction } from '../../App';

const Root = ({ tree }) => {
  const props = useContext(Interaction);
  return (
    <Icon
      icon={<FolderSpecialOutlinedIcon />}
      label={tree.getName()}
      color={tree === props.cwd.at(-1) ? 'selectedObject' : 'object'}
      onClick={(e) => onChangeDirectory([tree, props], e)}
    />
  );
};

const onChangeDirectory = ([dest, { root, cwd, setCwd, setRecord }]) => {
  if (dest === cwd.at(-1)) return;
  const queue = [cwd.at(-1)];
  const visited = new Set(queue);
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dest) {
      const new_cwd = [dest];
      while (dest != root) {
        dest = dest.getParent();
        new_cwd.unshift(dest);
      }
      let common_idx = 1;
      while (
        common_idx < cwd.length &&
        common_idx < new_cwd.length &&
        cwd[common_idx] === new_cwd[common_idx]
      )
        ++common_idx;
      let add_command = 'cd ';
      for (let i = common_idx; i < cwd.length; ++i) {
        add_command += '../';
      }
      for (let i = common_idx; i < new_cwd.length; ++i) {
        add_command += `${new_cwd[i].getName()}/`;
      }
      setRecord((prev) => {
        return {
          cmd: [...prev.cmd, add_command.split(' ')],
          error: [...prev.error, []],
        };
      });
      setCwd(new_cwd);
      return;
    }
    const next = [...current.getChild().values()];
    if (current !== root) {
      next.push(current.getParent());
    }
    next.forEach((vertex) => {
      if (!visited.has(vertex)) {
        queue.push(vertex);
        visited.add(vertex);
      }
    });
  }
};

const ChipChild = ({ tree }) => {
  const props = useContext(Interaction);
  return (
    <Icon
      icon={
        tree.getType() == TYPE.DIR ? (
          <FolderOpenOutlinedIcon fontSize='small' />
        ) : (
          <InsertDriveFileOutlinedIcon fontSize='small' />
        )
      }
      label={tree.getName()}
      color={tree === props.cwd.at(-1) ? 'selectedObject' : 'object'}
      onClick={(e) => onChangeDirectory([tree, props], e)}
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
    <>
      <Grid container alignItems='flex-start'>
        {tree === cwd.at(0) ? <Root tree={tree} /> : null}
      </Grid>
      <Grid container alignItems='flex-start' style={{ flexDirection: 'column' }}>
        {[...tree.getChild().values()].map((child, idx) => (
          <VertexWrapper key={idx}>
            <CircleWrapper>
              {Prefix(child.getDepth())}
              <ChipChild tree={child} />
            </CircleWrapper>
            {child.getChild()?.size ? <Vertex tree={child} cwd={cwd} /> : null}
          </VertexWrapper>
        ))}
      </Grid>
    </>
  );
};

export default Vertex;

const VertexWrapper = styled(Box)`
  font-size: 25px;
`;

const CircleWrapper = styled(Box)`
  display: flex;
`;

const Icon = styled(Chip)`
  margin-bottom: 7px;
`;
