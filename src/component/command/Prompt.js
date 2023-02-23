import { useState, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CMD from '../../constants/Cmd';
import { Box, Paper, TextField } from '@mui/material';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { useTheme } from 'styled-components';

const MAX_LENGTH = 50;
const FONT_WIDTH = 30;

const Prompt = ({ cmd, addCommand }) => {
  const theme = useTheme();
  const focusInput = useRef(null);
  const historyIndex = useRef(cmd.length + 1);
  const [input, setInput] = useState('');
  const [recoInput, setRecoInput] = useState('');

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

  const handleOnKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      changeIndex(-1);
      if (historyIndex.current === cmd.length) setInput('');
      else setInput(cmd[historyIndex.current].join(' '));
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
      e.preventDefault();
      if (recoInput !== undefined) {
        setInput(recoInput);
      }
    }
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <Wrapper>
      <KeyboardDoubleArrowRightRoundedIcon color='white' />
      <InputField
        size='small'
        autoComplete='off'
        autoFocus={true}
        type='text'
        ref={focusInput}
        // onKeyUp={handleOnKeyUp}  // tab 안됨
        onKeyDown={handleOnKeyDown} // 한글 입력 이슈
        // onKeyPress={handleOnKeyPress}  // enter만 됨
        value={input}
        onChange={onChangeInput}
        inputProps={{
          style: { color: '#0a1929' },
        }}
      />
      <Recommend sx={{ bgcolor: 'History.main' }} elevation={0}>
        {recoInput}
      </Recommend>
      <CurrentTyping
        elevation={0}
        onClick={onClickReco}
        sx={{ color: 'History.contrastText', bgcolor: 'History.main' }}
      >
        {input}
      </CurrentTyping>
    </Wrapper>
  );
};

export default Prompt;

const Wrapper = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputField = styled(TextField)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffffff',
    },
    '&:hover fieldset': {
      borderColor: '#ffffff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffffff',
    },
  },
});

const Recommend = styled(Paper)`
  position: absolute;
  left: 37px;
  display: inline-block;
  color: gray;
  font-size: 18px;
  font-family: Arial;
  z-index: 3;
`;

const CurrentTyping = styled(Paper)`
  position: absolute;
  left: 37px;
  display: inline-block;
  font-size: 18px;
  font-family: Arial;
  z-index: 3;
`;
