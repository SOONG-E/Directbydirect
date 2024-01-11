import Draggable from 'react-draggable';
import { useRecoilValue } from 'recoil';
import TreeView from 'src/component/DirectoryTree/TreeView';
import TopBar from 'src/component/common/TopBar';
import { rootState } from 'src/state/root';
import { rootDirNameState } from 'src/state/rootDirName';

export default function DirectoryTree() {
  const root = useRecoilValue(rootState);
  const rootDirName = useRecoilValue(rootDirNameState);

  root.setName(rootDirName);

  return (
    <Draggable defaultPosition={{ x: 400, y: 50 }} bounds='body'>
      <div className='absolute flex h-5/6 w-3/5 min-w-60 flex-col'>
        <TopBar />
        <TreeView tree={root} />
      </div>
    </Draggable>
  );
}
