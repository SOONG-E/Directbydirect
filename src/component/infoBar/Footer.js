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
  position: absolute;
  width: 99%;
  bottom: 0;
`;
