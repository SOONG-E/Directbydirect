import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const Theme = () => {
  return (
    <SelectButton variant='contained' disableElevation>
      테마
    </SelectButton>
  );
};

export default Theme;

const SelectButton = styled(Button)`
  float: right;
`;
