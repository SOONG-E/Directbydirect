import styled from 'styled-components';
import { useState } from 'react';
import Message from '../constants/Message';

const Directory = (setDirec) => {
  const [directorty, setDirectorty] = useState('');

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      setDirec(directorty);
      setDirectorty('');
    }
  };

  const onChangeInput = (e) => {
    setDirectorty(e.target.value);
  };

  return (
    <Box>
      <Help>{Message.INFORMATION}</Help>
      <StartDirectory
        placeholder='시작할 디렉토리 입력란'
        onKeyDown={handleOnKeyPress}
        onChange={onChangeInput}
        value={directorty}
      />
    </Box>
  );
};

export default Directory;

const Box = styled.div``;
const Help = styled.div``;
const StartDirectory = styled.input``;
