import React, { useContext, useEffect, useRef } from 'react';
import { Interaction } from '../../App';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Stack } from '@mui/material';
import { useTheme } from 'styled-components';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const CommandLine = ({ cmd, error }) => {
  const theme = useTheme();
  return (
    <Stack direction='row' justifyContent='space-between' margin={1}>
      <CommandBox>
        <PromptIcon>
          <ArrowForwardIosIcon sx={{ fontSize: 11 }} />
        </PromptIcon>
        {cmd.join(' ')}
      </CommandBox>
      {error.length === 0 ? (
        <CheckCircleOutlineOutlinedIcon color='success' />
      ) : (
        <ErrorOutlineOutlinedIcon color='error' />
      )}
    </Stack>
  );
};

const ErrorLine = ({ error }) => {
  const theme = useTheme();
  return (
    <>
      {error.map((x, idx) => (
        <ErrorAlert
          key={idx}
          sx={{
            borderRadius: 1,
            minWidth: '90%',
            padding: 1,
            bgcolor: 'History.errorBg',
          }}
        >
          {x}
        </ErrorAlert>
      ))}
    </>
  );
};

const History = () => {
  const { record } = useContext(Interaction);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [record]);

  return (
    <>
      <HistoryBox
        sx={{
          borderRadius: 10,
        }}
      >
        {record.cmd.map((x, idx) => (
          <Box key={idx}>
            <CommandLine cmd={x} error={record.error[idx]} />
            <ErrorLine error={record.error[idx]} />
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </HistoryBox>
    </>
  );
};

export default History;

const ErrorAlert = styled(Box)``;

const PromptIcon = styled(Box)`
  padding-top: 1px;
  margin-right: 2px;
`;

const HistoryBox = styled(Box)`
  height: 90%;
  font-size: large;
  font-family: monospace;
  line-height: 20px;
  padding: 0.25em 1em;
  overflow-y: auto;
`;

const CommandBox = styled(Box)`
  display: flex;
`;
