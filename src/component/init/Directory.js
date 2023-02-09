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
      <Wrapper>
        <StartDirectory
          placeholder='시작할 디렉토리 입력란'
          onKeyDown={handleOnKeyPress}
          onChange={onChangeInput}
          value={directory}
        />
      </Wrapper>
    </Box>
  );
};

export default Directory;

const Box = styled.div`
  margin: 10%;
  border: 2px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
const Help = styled.div`
  padding: 0% 20%;
`;
const StartDirectory = styled.input`
  type: text;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  margin-top: 30px;
  width: 50%;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 30px;
`;
