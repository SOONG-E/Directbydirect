// import { useMemo } from 'react';
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
  return (
    <Box>
      {record.cmd.map((x, idx) => (
        <Container key={idx}>
          <CommandLine cmd={x} />
          <ErrorLine error={record.error[idx]} />
        </Container>
      ))}
    </Box>
  );
};

export default History;

const Box = styled.div`
  height: 400px;
`;

const Container = styled.div``;
const CommandBox = styled.div``;
const ErrorBox = styled.div``;
