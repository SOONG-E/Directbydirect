import { styled } from '@mui/material/styles';
import ModeButton from './ModeButton';
import Theme from './Theme';
import { Box, AppBar, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <AppBar
        position='static'
        style={{ backgroundColor: 'primary.border' }}
        elevation={0}
      >
        <Stack
          direction='row'
          justifyContent='flex-end'
          spacing={2}
          sx={{ m: '0.1em' }}
        >
          <ModeButton />
          <Theme />
        </Stack>
      </AppBar>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(Box)`
  position: relative;
  flexgrow: 1;
  height: 5%;
  width: 100%;
`;
