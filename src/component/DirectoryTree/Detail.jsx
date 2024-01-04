import { useRecoilValue } from 'recoil';
import { rootDirNameState } from 'src/state/rootDirName';

const Detail = () => {
  const rootDirName = useRecoilValue(rootDirNameState);

  return (
    <div className='flex-1 rounded-b-md bg-[#EFEFEF] bg-opacity-90'>
      {/* Directory */}
      <div className='flex gap-2'>
        <img src='Directory.png' alt='Directory' />
        <p>{rootDirName}</p>
      </div>
      {/* File */}
      <div className='flex gap-2'>
        <img src='File.png' alt='File' />
        <p>file</p>
      </div>
    </div>
  );
};

export default Detail;
