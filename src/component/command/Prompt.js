import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CMD from '../../constants/Cmd';

const MAX_LENGTH = 50;
const FONT_WIDTH = 30;

const Prompt = ({ cmd, addCommand }) => {
  const focusInput = useRef(null);
  const historyIndex = useRef(cmd.length + 1);
  const [input, setInput] = useState('');
  const [recoInput, setRecoInput] = useState('');

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  useEffect(() => {
    if (input.length === 0) {
      setRecoInput('');
      return;
    }
    setRecoInput(
      CMD.filter((suggestion) => suggestion.startsWith(input.toLowerCase()))[0]
    );
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
      focusInput.current.focus();
      setInput(cmd[historyIndex.current].join(' '));
      const el = e.target;
      setTimeout(() => {
        el.setSelectionRange(MAX_LENGTH, MAX_LENGTH);
        el.scrollLeft = MAX_LENGTH * FONT_WIDTH;
      }, 0);
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
    if (e.key === 'Tab') {
      e.preventDefault(); // 탭에서 다음 항목으로 넘어가는 거 방지!
      if (recoInput !== undefined) {
        setInput(recoInput);
      }
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
      <Recommend>{recoInput}</Recommend>
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
