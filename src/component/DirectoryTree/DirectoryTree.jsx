import Draggable from 'react-draggable';
import Detail from 'src/component/DirectoryTree/Detail';
import TopBar from 'src/component/Terminal/TopBar';

export default function DirectoryTree() {
  return (
    <Draggable defaultPosition={{ x: 350, y: 50 }} bounds='body'>
      <div className='absolute flex h-5/6 w-3/5 min-w-60 flex-col'>
        <TopBar />
        <Detail />
      </div>
    </Draggable>
  );
}
