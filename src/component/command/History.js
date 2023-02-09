import React, { useContext, useEffect, useRef } from 'react';
import { Interation } from '../../App';
import styled from 'styled-components';

const CommandLine = ({ cmd }) => {
  return (
    <CommandBox>
      <Right src='img/right.png' alt='' />
      {cmd.join(' ')}
    </CommandBox>
  );
};

const ErrorLine = ({ error }) => {
  return (
    <>
      {error.map((x, idx) => (
        <>
          <ErrorBox key={idx}>{x}</ErrorBox>
        </>
      ))}
    </>
  );
};

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

const Right = styled.img`
  margin-top: 5.5px;
  filter: grayscale(50%);
  height: 10px;
  padding-right: 10px;
`;

const Box = styled.div`
  width: 400px;
  height: 100%;
  font-size: large;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  font-family: monospace;
  line-height: 20px;
  padding: 0.25em 1em;
  overflow-y: auto;
`;

const Container = styled.div``;
const CommandBox = styled.div`
  display: flex;
`;
const ErrorBox = styled.div``;
