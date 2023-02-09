import styled from 'styled-components';
import ModeButton from './ModeButton';
import Theme from './Theme';

const Header = () => {
  return (
    <HeaderBar>
      <ModeButton />
      <Theme />
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.header`
  height: 5%;
  width: 100%;
`;
