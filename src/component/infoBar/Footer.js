import styled from 'styled-components';
import GitButton from './GitButton';

const FooterBar = styled.header``;

const Footer = () => {
  return (
    <FooterBar>
      <GitButton />
    </FooterBar>
  );
};

export default Footer;
