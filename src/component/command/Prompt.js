import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Prompt = ({ cmd, addCommand }) => {
  const focusInput = useRef(null);
  const historyIndex = useRef(cmd.length + 1);
  const [input, setInput] = useState('');
  const [recoInput, setRecoInput] = useState('');

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  useEffect(() => {
    setRecoInput('');
  }, [input]);

  const onClickReco = () => {
    focusInput.current.focus();
  };

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
        type='text'
        ref={focusInput}
        onKeyDown={handleOnKeyPress}
        value={input}
        onChange={onChangeInput}
      />
      <Recommend onClick={onClickReco}>{recoInput}</Recommend>
      <CurrentTyping onClick={onClickReco}>{input}</CurrentTyping>
    </Box>
  );
};
export default Prompt;

const Box = styled.div``;
const InputBox = styled.input`
  background: transparent;
  border: 3px solid yellow;
  display: inline-block;
  position: relative;
  font-size: 18px;
  color: white;
  font-family: Arial;
`;
const Recommend = styled.span`
  display: inline-block;
  position: absolute;
  top: 862px;
  left: 11px;
  width: 100px;
  height: 100px;
  font-size: 18px;
  color: gray;
  font-family: Arial;
`;
const CurrentTyping = styled.span`
  display: inline-block;
  position: absolute;
  top: 862px;
  left: 11px;
  width: 100px;
  height: 100px;
  font-size: 18px;
  color: black;
  font-family: Arial;
`;
