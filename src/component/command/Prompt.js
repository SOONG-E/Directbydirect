import { useState, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CMD from '../../constants/Cmd';
import { Box, Paper, TextField } from '@mui/material';

const MAX_LENGTH = 50;
const FONT_WIDTH = 30;

const Prompt = ({ cmd, addCommand }) => {
  const focusInput = useRef(null);
  const historyIndex = useRef(cmd.length + 1);
  const [input, setInput] = useState('');
  const [recoInput, setRecoInput] = useState('');

  // useEffect(() => {
  //   focusInput.current.focus();
  // }, []);

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
      setInput(cmd[historyIndex.current].join(' '));
      setTimeout(() => {
        e.target.setSelectionRange(MAX_LENGTH, MAX_LENGTH);
        e.target.scrollLeft = MAX_LENGTH * FONT_WIDTH;
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
    <Box sx={{ backgroundColor: '#0a1929', boxShadow: '5px 5px 3px gray' }}>
      <InputBox
        autoFocus={true}
        type='text'
        ref={focusInput}
        onKeyDown={handleOnKeyPress}
        value={input}
        onChange={onChangeInput}
        color='warning'
      />
      <Recommend>{recoInput}</Recommend>
      <CurrentTyping onClick={onClickReco}>{input}</CurrentTyping>
    </Box>
  );
};
export default Prompt;

const InputBox = styled(TextField)`
  width: 100%;
  heigth: 100%;
  font-size: 18px;
  color: white;
  font-family: Arial;
`;
const Recommend = styled(Paper)`
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
const CurrentTyping = styled(Paper)`
  display: inline-block;
  background: transparent;
  position: absolute;
  top: 862px;
  left: 11px;
  width: 100px;
  height: 100px;
  font-size: 18px;
  color: black;
  font-family: Arial;
`;
