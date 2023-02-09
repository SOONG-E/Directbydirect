import styled from 'styled-components';

const GitButton = () => {
  return (
    <a href='https://github.com/SOONG-E/Directbydirect'>
      <Icon alt='enter our github!' src='img/github.png' />
    </a>
  );
};

export default GitButton;

const Icon = styled.img`
  float: right;
  display: inline-block;
  height: 80px;
`;
