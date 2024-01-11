import Draggable from 'react-draggable';
import { useRecoilValue } from 'recoil';
import Detail from 'src/component/DirectoryTree/Detail';
import TopBar from 'src/component/common/TopBar';
import { rootState } from 'src/state/root';

export default function DirectoryTree() {
  const root = useRecoilValue(rootState);

  return (
    <Draggable defaultPosition={{ x: 350, y: 50 }} bounds='body'>
      <div className='absolute flex h-5/6 w-3/5 min-w-60 flex-col'>
        <TopBar />
        <Detail tree={root} />
      </div>
    </Draggable>
  );
}
