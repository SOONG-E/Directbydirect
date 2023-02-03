import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CommandLine = ({ cmd }) => {
  return <CommandBox>{cmd.join(' ')}</CommandBox>;
};

const ErrorLine = ({ error }) => {
  return (
    <div>
      {error.map((x, idx) => (
        <ErrorBox key={idx}>{x}</ErrorBox>
      ))}
    </div>
  );
};

const History = ({ record }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [record]);

  return (
    <Box>
      {record.cmd.map((x, idx) => (
        <Container key={idx}>
          <CommandLine cmd={x} />
          <ErrorLine error={record.error[idx]} />
        </Container>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default History;

const Box = styled.div`
    width: 400px;
    height: 800px;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    padding: 0.25em 1em;
    overflow-y: auto;
`;

const Container = styled.div``;
const CommandBox = styled.div``;
const ErrorBox = styled.div``;
