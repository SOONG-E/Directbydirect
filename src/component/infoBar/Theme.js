import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Switch } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Theme = ({ setTheme }) => {
  const theme = useTheme();

  const changeTheme = () => {
    setTheme((prev) => {
      return prev === 1 ? 0 : 1;
    });
  };

  return (
    <ThemeSwitch
      icon=<DarkModeIcon />
      checkedIcon=<LightModeIcon />
      onChange={changeTheme}
    />
  );
};

export default Theme;

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 40,
  padding: 1,
  '& .MuiSwitch-switchBase': {
    padding: 4,
    margin: 4,
    transitionDuration: '200ms',
    '&.Mui-checked': {
      transform: 'translateX(39px)',
      color: '#fff', //  태양 아이콘 색
      '& + .MuiSwitch-track': {
        backgroundColor: '#ecbe30', //배경색 초록색
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 40 / 2,
    backgroundColor: '#E9E9EA', //배경색 하얀색
  },
}));
const SelectButton = styled(Button)`
  float: right;
`;
