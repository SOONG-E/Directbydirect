import { useRecoilValue } from 'recoil';
import { rootDirNameState } from 'src/state/rootDirName';

const IconPick = ({ tree }) => {
  const typeText = tree.type === 0 ? 'Directory' : 'File';
  return (
    <div className={`flex gap-2 pl-${tree.depth * 10}`}>
      {typeText === 'Directory' && tree.child.size !== 0 && '🔻'}
      <img src={`${typeText}.png`} alt={`${typeText}`} />
      <p>{tree.name}</p>
    </div>
  );
};

const Detail = () => {
  const rootDirName = useRecoilValue(rootDirNameState);
  const tree = {
    name: 'hi',
    child: new Map(),
    parent: null,
    type: 0,
    depth: 0,
  };

  const a = {
    name: 'a',
    child: new Map(),
    parent: tree,
    type: 0,
    depth: 1,
  };

  const b = {
    name: 'b',
    child: new Map(),
    parent: tree,
    type: 1,
    depth: 2,
  };

  tree.child.set(a.name, a);
  a.child.set(b.name, b);
  console.log(tree);
  console.log(tree.child.forEach((value, key) => console.log(key, value)));
  return (
    <div className='flex-1 rounded-b-md bg-[#EFEFEF] bg-opacity-90'>
      {/* root 보여주기 */}
      {tree.parent === null && (
        <div className='flex items-center gap-1'>
          {tree.child.size !== 0 && '🔻'}
          <img src='Directory.png' alt='Directory' />
          <p>{rootDirName}</p>
        </div>
      )}
      {/* child 보여주기 */}
      {[...tree.child.values()].map((child, idx) => (
        <div key={idx}>
          <IconPick tree={child} />
          {/* {child.child.size !== 0 && <Detail tree={child} />} */}
        </div>
      ))}
    </div>
  );
};

export default Detail;
