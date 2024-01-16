import { useEffect } from 'react';
import Draggable from 'react-draggable';
import NextButton from 'src/component/InitialModal/WelcomeModal/NextButton';
import TopBar from 'src/component/common/TopBar';

const WelcomeModal = ({ setIsIntroduction }) => {
  const title = 'DirectByDirect';
  const instruction =
    '에서 디렉토리 구조를 편집하는 명령어들을 연습해볼 수 있어요!\n 명령어 사용법들을 연습해보고 변경되는 구조를 그림과 함께 확인해봐요!\n\n 다음으로 넘어가 루트 디렉토리 명을 지정후 시작할 수 있어요!';

  const handleKeyDown = (event) => {
    console.log('QW');
    if (event.key === 'Enter') {
      setIsIntroduction(false);
    }
  };

  useEffect(() => {
    document.getElementById('welcome-modal').focus();
  }, []);

  return (
    <Draggable defaultPosition={{ x: 10, y: 10 }} bounds='body'>
      <div
        id='welcome-modal'
        tabIndex='0'
        className='absolute flex h-[320px] w-[560px] flex-col justify-between rounded-md bg-white bg-opacity-80 shadow-lg backdrop-blur-lg focus:outline-none'
        onKeyDown={handleKeyDown}
      >
        <TopBar title='DirectByDirect' />
        <div className='whitespace-pre-wrap'>
          <span className='font-semibold'>{title}</span>
          {instruction}
        </div>
        <div className='flex justify-end'>
          <NextButton setIsIntroduction={setIsIntroduction} />
        </div>
      </div>
    </Draggable>
  );
};

export default WelcomeModal;
