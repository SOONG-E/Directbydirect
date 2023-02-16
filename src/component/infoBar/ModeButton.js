import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ModeButton = () => {
  const theme = useTheme();
  return (
    <SelectButton
      variant='contained'
      disableElevation
      color='button'
      size='small'
      sx={{ fontSize: '15px' }}
    >
      모드
    </SelectButton>
  );
};

export default ModeButton;

const SelectButton = styled(Button)`
  float: right;
`;
