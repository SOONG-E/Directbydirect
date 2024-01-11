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

const Detail = ({ tree }) => {
  const child = tree.getChild();
  const rootDirName = useRecoilValue(rootDirNameState);

  return (
    <div className='flex-1 rounded-b-md bg-[#EFEFEF] bg-opacity-90'>
      {/* root 보여주기 */}
      {tree.getParent() === null && (
        <div className='flex items-center gap-1'>
          {child.size !== 0 && '🔻'}
          <img src='Directory.png' alt='Directory' />
          <p>{rootDirName}</p>
        </div>
      )}
      {/* child 보여주기 */}
      {/* {tree.forEach((child) => (
        <div>
          <IconPick tree={tree} />
          {child.child.size !== 0 && <Detail tree={child} />}
        </div>
      ))} */}
    </div>
  );
};

export default Detail;
