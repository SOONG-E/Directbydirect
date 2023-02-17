import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';

const GitButton = () => {
  return (
    <a href='https://github.com/SOONG-E/Directbydirect'>
      <Img alt='enter our github!' src='img/github.png' />
    </a>
  );
};

export default GitButton;

const Img = styled(Avatar)`
  display: inline-block;
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 50px;
  height: 50px;
  z-index: 2;
`;
