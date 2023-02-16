import { styled } from '@mui/material/styles';
import ModeButton from './ModeButton';
import Theme from './Theme';
import { Box, AppBar, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Colors from '../../constants/Colors';

const Header = () => {
  return (
    <ThemeProvider theme={Colors}>
      <Wrapper>
        <AppBar
          position='static'
          style={{ backgroundColor: Colors.palette.primary.border }}
          elevation={0}
        >
          <Stack
            direction='row'
            justifyContent='flex-end'
            spacing={2}
            sx={{ m: '10px' }}
          >
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
  position: relative;
  flexgrow: 1;
  heigth: 10%;
`;
