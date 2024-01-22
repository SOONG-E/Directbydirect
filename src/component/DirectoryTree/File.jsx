import { useRecoilValue } from 'recoil';
import { cwdState } from 'src/state/cwd';

const File = ({ tree }) => {
  const cwd = useRecoilValue(cwdState);

  const isCwd = tree === cwd.at(-1);
  const filenameClass = isCwd
    ? 'rounded-[3px] bg-[#0064e1] px-1 text-white'
    : '';

  return (
    <div
      className='flex items-center gap-x-2'
      style={{ paddingLeft: `${tree.getDepth() * 15}px` }}
    >
      <img src={`ic_file_${tree.getType()}.png`} alt='file icon' />
      <p className={filenameClass}>{tree.getName()}</p>
    </div>
  );
};

export default File;
