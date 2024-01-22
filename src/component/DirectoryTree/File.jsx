import { useRecoilValue } from 'recoil';
import { cwdState } from 'src/state/cwd';

const File = ({ tree }) => {
  const cwd = useRecoilValue(cwdState);

  const isCwd = tree === cwd.at(-1);
  const filenameClass = isCwd
    ? 'rounded-[3px] bg-[#0064e1] px-1 text-white font-mono'
    : 'font-mono';

  return (
    <div
      className='flex items-center gap-x-1'
      style={{ paddingLeft: `${tree.getDepth() * 15}px` }}
    >
      <img
        src={`ic_file_${tree.getType()}.png`}
        alt='file icon'
        className='h-6 w-6'
      />
      <p className={filenameClass}>{tree.getName()}</p>
    </div>
  );
};

export default File;
