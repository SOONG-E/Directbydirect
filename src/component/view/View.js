import { useContext } from 'react';
import { Interaction } from '../../App';
import Vertex from './Vertex';
import { Stack } from '@mui/material';

const View = () => {
  const { root, cwd } = useContext(Interaction);
  return (
    <Stack direction='column' alignItems='center' width='61vw' padding={4}>
      <Vertex tree={root} cwd={cwd} />
    </Stack>
  );
};

export default View;
