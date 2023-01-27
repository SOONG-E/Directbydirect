import styled from 'styled-components';

const History = ({ record }) => {
  console.log(record);
  return (
    <Box>
      {record.map((x, idx) => (
        <div key={idx}>{x.join(' ')}</div>
      ))}
    </Box>
  );
};

export default History;

const Box = styled.div`
  height: 400px;
`;
