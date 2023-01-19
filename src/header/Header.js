import styled from 'styled-components';
import ModeButton from './ModeButton';
import Theme from './Theme';

const HeaderBar = styled.header``;
const Button = styled.button``;

const Header = () => {
  return (
    <HeaderBar>
      <ModeButton />
      <Theme />
    </HeaderBar>
  );
};

export default Header;
