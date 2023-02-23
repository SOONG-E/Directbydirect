import {
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Avatar,
} from '@mui/material';
import { Us } from '../../constants/Us';
import ShareIcon from '@mui/icons-material/Share';
import { useTheme } from 'styled-components';
import { styled } from '@mui/material/styles';

const GitButton = () => {
  const theme = useTheme();
  const onClick = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };
  const handleCopy = async (url) => {
    try {
      await navigator.clipboard.writeText(url);

      alert('공유 준비 완료! 원하는 상대에게 전달하세요!');
    } catch (e) {
      alert('복사 실패!');
    }
  };

  return (
    <GitDial
      ariaLabel='SpeedDial'
      sx={{
        color: '#000',
        position: 'absolute',
        bottom: 16,
        right: 16,
      }}
      icon={<SpeedDialIcon />}
    >
      {Us.map((developer) => (
        <SpeedDialAction
          onClick={() => onClick(developer.url)}
          key={developer.name}
          icon=<Avatar src={developer.img} />
          tooltipTitle={developer.name}
        />
      ))}
      <SpeedDialAction
        onClick={() => handleCopy('http://localhost:3000/')}
        icon={<ShareIcon />}
        tooltipTitle='Share'
      />
    </GitDial>
  );
};

export default GitButton;

const GitDial = styled(SpeedDial)(({ theme }) => ({
  '& .MuiSpeedDial-fab': {
    backgroundColor: '#ecbe30',
  },
  '& .MuiSpeedDialIcon-iconOpen': {
    '& .MuiSpeedDial-fab': {
      backgroundColor: '#ecbe30',
    },
  },
}));
