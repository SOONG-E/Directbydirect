import { styled } from '@mui/material/styles';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { Us } from '../../constants/Us';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';

const GitButton = () => {
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
    <SpeedDial
      ariaLabel='SpeedDial'
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {Us.map((developer) => (
        <SpeedDialAction
          onClick={() => onClick(developer.url)}
          key={developer.name}
          icon={<img src='developer.img_src' alt=<GitHubIcon /> />}
          tooltipTitle={developer.name}
        />
      ))}
      <SpeedDialAction
        onClick={() => handleCopy('http://localhost:3000/')}
        icon={<ShareIcon />}
        tooltipTitle='Share'
      />
    </SpeedDial>
  );
};

export default GitButton;
