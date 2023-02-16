import { styled } from '@mui/material/styles';
import { useState, useRef } from 'react';
import { MESSAGE } from '../../constants/Message';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import { useTheme } from 'styled-components';

const Directory = ({ onDirec }) => {
  const theme = useTheme();
  const [directory, setDirectorty] = useState('');

  const focusInput = useRef();
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value.length < 1) {
        focusInput.current.focus();
        return;
      }
      onDirec(directory);
      setDirectorty('');
    }
  };

  const onChangeInput = (e) => {
    setDirectorty(e.target.value);
  };

  return (
    <Container>
      <Help>{MESSAGE.INFORMATION}</Help>
      <Wrapper>
        <StartDirectory
          ref={focusInput}
          autoFocus={true}
          placeholder='시작할 디렉토리 입력란'
          onKeyDown={handleOnKeyPress}
          onChange={onChangeInput}
          value={directory}
          color='StartDirectory'
      />
      </Wrapper>
    </Container>
  );
};

export default Directory;

const Container = styled(Box)`
  margin: 10%;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
const Help = styled(Box)`
  padding: 0% 20%;
`;
const StartDirectory = styled(TextField)`
  type: text;
  font-size: 15px;
  text-align: center;
  border-radius: 10px;
  margin-top: 30px;
  width: 50%;
  height: 100%;
`;
const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 30px;
`;
