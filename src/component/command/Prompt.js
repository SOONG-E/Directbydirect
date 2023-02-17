import { useState, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CMD from '../../constants/Cmd';
import { Box, Paper, TextField } from '@mui/material';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

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
    <Wrapper>
      <KeyboardDoubleArrowRightRoundedIcon color='white' />
      <InputField
        size='small'
        autoComplete='off'
        autoFocus={true}
        type='text'
        ref={focusInput}
        onKeyDown={handleOnKeyPress}
        value={input}
        onChange={onChangeInput}
        InputProps={{
          style: { color: '#0a1929' },
        }}
      />
      <Recommend elevation={0}>{recoInput}</Recommend>
      <CurrentTyping elevation={0} onClick={onClickReco}>
        {input}
      </CurrentTyping>
    </Wrapper>
  );
};

export default Prompt;

const Wrapper = styled(Box)`
  position: relative;
  display: flex;
  background-color: #0a1929;
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
  background: #0a1929;
  color: gray;
  font-size: 18px;
  font-family: Arial;
  z-index: 3;
`;

const CurrentTyping = styled(Paper)`
  position: absolute;
  left: 37px;
  display: inline-block;
  background: #0a1929;
  color: white;
  font-size: 18px;
  font-family: Arial;
  z-index: 3;
`;
