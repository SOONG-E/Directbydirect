import { useRecoilValue } from 'recoil';
import { TYPE } from 'src/constant/Type';
import { rootDirNameState } from 'src/state/rootDirName';

const IconPick = ({ tree }) => {
  const type = tree.getType();

  return (
    <div className={`flex gap-2 pl-${tree.getDepth() * 10}`}>
      {type === TYPE.DIR && '🔻'}
      <img src={`ic_file_type_${type}.png`} alt={type} />
      <p>{tree.getName()}</p>
    </div>
  );
};

const TreeView = ({ tree }) => {
  const child = tree.getChild();
  const rootDirName = useRecoilValue(rootDirNameState);

  return (
    <div className='flex-1 rounded-b-md bg-[#EFEFEF] bg-opacity-90'>
      {/* root 보여주기 */}
      {tree.getParent() === null && (
        <div className='flex items-center gap-1'>
          {child.size !== 0 && '🔻'}
          <img src='ic_file_type_0.png' alt='0' />
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

export default TreeView;
