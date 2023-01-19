import styled from 'styled-components';
import History from './History';
import Prompt from './Prompt';

const Box = styled.div``;

const Command = () => {
  return (
    <Box>
      Command
      <History />
      <Prompt />
    </Box>
  );
};

export default Command;
