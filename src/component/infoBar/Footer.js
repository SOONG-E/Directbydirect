import { styled } from '@mui/material/styles';
import GitButton from './GitButton';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <FooterBar>
      <GitButton />
    </FooterBar>
  );
};

export default Footer;

const FooterBar = styled(Box)`
  height: 10vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;
