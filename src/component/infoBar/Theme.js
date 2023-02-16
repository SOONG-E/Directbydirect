import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Theme = () => {
  return (
    <SelectButton
      variant='contained'
      disableElevation
      color='button'
      size='small'
      sx={{ fontSize: '15px' }}
    >
      테마
    </SelectButton>
  );
};

export default Theme;

const SelectButton = styled(Button)`
  float: right;
`;
