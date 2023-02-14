import { useContext } from 'react';
import { Interation } from '../../App';
import { styled } from '@mui/material/styles';
import Vertex from './Vertex';
import { Box, Chip } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Colors from '../../constants/Colors';

const Root = ({ root }) => {
  return <RootWrapper>{root.getName()}</RootWrapper>;
};

const View = () => {
  const { root, cwd } = useContext(Interation);
  return (
    <ThemeProvider theme={Colors}>
      <Canvas>
        <Root root={root} />
        <Vertex tree={root} cwd={cwd} />
      </Canvas>
    </ThemeProvider>
  );
};

export default View;

const Canvas = styled(Box)`
  margin-left: 20px;
`;

const RootWrapper = styled(Box)`
  border: 1px solid black;
  font-size: 25px;
`;
