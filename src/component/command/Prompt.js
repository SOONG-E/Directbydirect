import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

const Prompt = ({ addCommand }) => {
  const focusInput = useRef(null);
  const [input, setInput] = useState('');

  useEffect(() => {
    focusInput.current.focus();
  }, []);

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
        ref={focusInput}
        placeholder='여기에 적으세요.'
        onKeyDown={handleOnKeyPress}
        onChange={onChangeInput}
        value={input}
      />
    </Box>
  );
};

export default Prompt;

const Box = styled.div``;
const InputBox = styled.input``;
