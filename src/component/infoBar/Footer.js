import styled from 'styled-components';
import GitButton from './GitButton';

const Footer = () => {
  return (
    <FooterBar>
      <GitButton />
    </FooterBar>
  );
};

export default Footer;

const FooterBar = styled.footer`
  position: absolute;
  width: 99%;
  bottom: 0;
`;
