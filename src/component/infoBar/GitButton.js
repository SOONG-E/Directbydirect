import { useRef } from 'react';
import { styled } from '@mui/material/styles';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { Us } from '../../constants/Us';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';

const GitButton = () => {
  const onClick = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };
  const copyLinkRef = useRef();
  const onCopy = () => {
    if (!document.queryCommandSupported('copy')) {
      alert('No Support');
      return;
    }

    // 선택 후 복사
    copyLinkRef.current.focus();
    copyLinkRef.current.select();
    document.execCommand('copy');

    // 복사 완료 알림
    alert('링크를 복사했습니다.');
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
          icon=<GitHubIcon />
          tooltipTitle={developer.name}
        />
      ))}
      <SpeedDialAction
        onClick={onCopy}
        icon={<ShareIcon />}
        tooltipTitle='Share'
      />
      <input
        // style='z-index: 0'
        type='text'
        ref={copyLinkRef}
        value={'http://localhost:3000/'}
      />
    </SpeedDial>
  );
};
<SpeedDialAction icon=<GitHubIcon /> tooltipTitle={'q'} />;
// <a href='https://github.com/SOONG-E/Directbydirect'>
//   <Img alt='enter our github!' src='img/github.png' />
// </a>

export default GitButton;
