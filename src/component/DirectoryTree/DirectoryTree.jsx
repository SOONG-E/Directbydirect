import { useEffect } from 'react';
import Draggable from 'react-draggable';
import { useRecoilValue } from 'recoil';
import TreeView from 'src/component/DirectoryTree/TreeView';
import TopBar from 'src/component/common/TopBar';
import { historyState } from 'src/state/history';
import { rootState } from 'src/state/root';
import { rootDirNameState } from 'src/state/rootDirName';

export default function DirectoryTree() {
  const root = useRecoilValue(rootState);
  const rootDirName = useRecoilValue(rootDirNameState);
  const history = useRecoilValue(historyState);

  root.setName(rootDirName);

  useEffect(() => {}, [history]);

  return (
    <Draggable defaultPosition={{ x: 400, y: 50 }} bounds='body'>
      <div className='window-height tree-width absolute flex flex-col'>
        <TopBar />
        <TreeView tree={root} />
      </div>
    </Draggable>
  );
}
