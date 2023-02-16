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
  float: right;
  display: inline-block;
  height: 50px;
  width: 50px;
  padding-right: 15px;
`;
