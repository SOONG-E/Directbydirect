import { styled } from '@mui/material/styles';
import ModeButton from './ModeButton';
import Theme from './Theme';
import { Box, AppBar, Toolbar, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Colors from '../../constants/Colors';

const Header = () => {
  return (
    <ThemeProvider theme={Colors}>
      <Wrapper>
        <AppBar position='static'>
          <Stack direction='row' justifyContent='flex-end' spacing={2}>
            <ModeButton />
            <Theme />
          </Stack>
        </AppBar>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Header;

const Wrapper = styled(Box)`
  flexgrow: 1;
  heigth: 10%;
`;
