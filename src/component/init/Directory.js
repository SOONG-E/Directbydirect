import styled from 'styled-components';
import { useState } from 'react';
import { MESSAGE } from '../../constants/Message';

const Directory = ({ onDirec }) => {
  const [directory, setDirectorty] = useState('');

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      onDirec(directory);
      setDirectorty('');
    }
  };

  const onChangeInput = (e) => {
    setDirectorty(e.target.value);
  };

  return (
    <Box>
      <Help>{MESSAGE.INFORMATION}</Help>
      <StartDirectory
        placeholder='시작할 디렉토리 입력란'
        onKeyDown={handleOnKeyPress}
        onChange={onChangeInput}
        value={directory}
      />
    </Box>
  );
};

export default Directory;

const Box = styled.div``;
const Help = styled.div``;
const StartDirectory = styled.input``;
