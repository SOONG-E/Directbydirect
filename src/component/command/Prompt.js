import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Prompt = ({ cmd, addCommand }) => {
  const focusInput = useRef(null);
  const historyIndex = useRef(cmd.length + 1);
  const [input, setInput] = useState('');

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  const changeIndex = (n) => {
    const tempIndex = historyIndex.current + n;
    if (0 <= tempIndex && tempIndex <= cmd.length) {
      historyIndex.current = tempIndex;
    }
  };

  const handleOnKeyPress = (e) => {
    if (e.key === 'ArrowUp') {
      changeIndex(-1);
      setInput(cmd[historyIndex.current].join(' '));
    }
    if (e.key === 'ArrowDown') {
      changeIndex(1);
      if (historyIndex.current === cmd.length) setInput('');
      else setInput(cmd[historyIndex.current].join(' '));
    }
    if (e.key === 'Enter') {
      historyIndex.current = cmd.length + 1;
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
