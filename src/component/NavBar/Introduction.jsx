const Introduction = () => {
  const instruction =
    '디렉토리 구조를 변경할 수 있는 명령어를 연습해볼 수 있는 웹사이트입니다.';
  const githubLink = 'https://github.com/SOONG-E/Directbydirect';

  return (
    <div className='nav-bar-box left-12 text-left'>
      <div>{instruction}</div>
      <a href={githubLink}>깃허브 바로가기</a>
      <div className='my-2 h-[0px] w-full border-t border-gray-400 px-2'></div>
      <div className='text-xs'>{'버전 정보: v1.0'}</div>
    </div>
  );
};

export default Introduction;
