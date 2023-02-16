import React, { useContext, useEffect, useRef } from 'react';
import { Interation } from '../../App';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Alert from '@mui/material/Alert';
import { Box } from '@mui/material';

const CommandLine = ({ cmd }) => {
  return (
    <CommandBox>
      <PromptIcon>
        <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
      </PromptIcon>
      {cmd.join(' ')}
    </CommandBox>
  );
};

const ErrorLine = ({ error }) => {
  return (
    <>
      {error.map((x, idx) => (
        <Alert variant='standard' key={idx} severity='error'>
          {x}
        </Alert>
      ))}
    </>
  );
};
// <ErrorIcon>
//   <ErrorOutlineOutlinedIcon sx={{ fontSize: 20, color: 'red' }} />
//   <ErrorBox key={idx}>{x}</ErrorBox>
// </ErrorIcon>

const History = () => {
  const { record } = useContext(Interation);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [record]);

  return (
    <HistoryBox>
      {record.cmd.map((x, idx) => (
        <Box key={idx}>
          <CommandLine cmd={x} />
          <ErrorLine error={record.error[idx]} />
        </Box>
      ))}
      <div ref={messagesEndRef} />
    </HistoryBox>
  );
};

export default History;

const PromptIcon = styled(Box)`
  padding-top: 3px;
`;

const HistoryBox = styled(Box)`
  height: 90%;
  font-size: large;
  background-color: #0a1929;
  color: palevioletred;
  font-family: monospace;
  line-height: 20px;
  padding: 0.25em 1em;
  overflow-y: auto;
`;

const CommandBox = styled(Box)`
  display: flex;
`;
