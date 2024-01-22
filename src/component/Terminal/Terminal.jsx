import Draggable from 'react-draggable';
import History from 'src/component/Terminal/History';
import Prompt from 'src/component/Terminal/Prompt';
import TopBar from 'src/component/common/TopBar';

export default function Terminal() {
  return (
    <Draggable defaultPosition={{ x: 20, y: 50 }} bounds='body'>
      <div className='window-height absolute flex w-[360px] flex-col justify-between rounded-md bg-black shadow-lg'>
        <TopBar title='Terminal' />
        <History />
        <Prompt />
      </div>
    </Draggable>
  );
}
