import { useContext } from 'react';
import { Interation } from '../../App';
import { styled } from '@mui/material/styles';
import Vertex from './Vertex';
import { Box, Chip, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';

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

const View = () => {
  const { root, cwd } = useContext(Interation);
  return (
    <Stack
      direction='column'
      alignItems='center'
      width='70vw'
    >
      <Root root={root} cwd={cwd} />
      <Vertex tree={root} cwd={cwd} />
    </Stack>
  );
};

export default View;
