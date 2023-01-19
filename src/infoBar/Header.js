import styled from 'styled-components';
import ModeButton from './ModeButton';
import Theme from './Theme';

const HeaderBar = styled.header``;

const Header = () => {
  return (
    <HeaderBar>
      <ModeButton />
      <Theme />
    </HeaderBar>
  );
};

export default Header;
