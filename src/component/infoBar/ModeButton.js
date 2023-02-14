import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const ModeButton = () => {
  return (
    <SelectButton variant='contained' disableElevation>
      모드
    </SelectButton>
  );
};

export default ModeButton;

const SelectButton = styled(Button)`
  float: right;
`;
