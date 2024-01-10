import Draggable from 'react-draggable';
import NextButton from 'src/component/InitialModal/WelcomeModal/NextButton';
import TopBar from 'src/component/Terminal/TopBar';

const WelcomeModal = ({ setIsIntroduction }) => {
  return (
    <Draggable defaultPosition={{ x: 10, y: 10 }} bounds='body'>
      <div className='absolute flex h-1/2 w-1/2 flex-col justify-between rounded-md bg-white bg-opacity-80 shadow-lg backdrop-blur-lg'>
        <TopBar title='DirectByDirect' />
        <div>설명</div>
        <div className='flex justify-end'>
          <NextButton setIsIntroduction={setIsIntroduction} />
        </div>
      </div>
    </Draggable>
  );
};

export default WelcomeModal;
