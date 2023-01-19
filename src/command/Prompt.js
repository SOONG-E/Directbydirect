import styled from 'styled-components';
import { useState } from 'react';

const Box = styled.div``;
const InputBox = styled.input``;

const Prompt = () => {
  const [input, setInput] = useState('');

  return (
    <Box>
      <InputBox />
    </Box>
  );
};

export default Prompt;
