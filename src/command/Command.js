import styled from 'styled-components';
import History from './History';
import Prompt from './Prompt';
import { useState, useEffect } from 'react';

const Box = styled.div``;

const Command = ({record, setRecord}) => {
  
  const [lastCommand, setLastCommand] = useState('');

  useEffect(() => {
    setRecord([...record, lastCommand.split(' ')]);
  }, [lastCommand]);

  return (
    <Box>
      Command
      <div>{lastCommand}</div>
      <History record={record} />
      <Prompt addCommand={setLastCommand} />
    </Box>
  );
};

export default Command;
