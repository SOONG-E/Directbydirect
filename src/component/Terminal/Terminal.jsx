import Draggable from 'react-draggable';
import History from 'src/component/Terminal/History';
import Prompt from 'src/component/Terminal/Prompt';
import TopBar from 'src/component/common/TopBar';

export default function Terminal() {
  return (
    <Draggable defaultPosition={{ x: 10, y: 50 }} bounds='body'>
      <div className='absolute flex h-5/6 min-h-96 w-1/3 min-w-60 flex-col justify-between rounded-md bg-black shadow-lg'>
        <TopBar title='Terminal' />
        <History />
        <Prompt />
      </div>
    </Draggable>
  );
}
