import styled from 'styled-components';
import { useState } from 'react';

const Box = styled.div``;
const InputBox = styled.input``;

const Prompt = ({ addCommand }) => {
  const [input, setInput] = useState('');

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      addCommand(input);
      setInput('');
    }
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <Box>
      <InputBox
        placeholder='여기에 적으세요.'
        onKeyDown={handleOnKeyPress}
        onChange={onChangeInput}
        value={input}
      />
    </Box>
  );
};

export default Prompt;
