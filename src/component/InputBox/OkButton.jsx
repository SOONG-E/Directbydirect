import { useSetRecoilState } from 'recoil';
import { showInputboxState } from 'src/state/showInputBox';

const OkButton = ({ text }) => {
  const setShowInputBox = useSetRecoilState(showInputboxState);

  const handleClick = () => setShowInputBox(false);

  return (
    <div
      onClick={handleClick}
      className='h-[21px] w-[73px] cursor-pointer rounded-[5px] bg-gradient-to-b from-[#1c6df5]/[42%] via-[#1c6df5]/[84%] to-[#1c6df5] drop-shadow'
    >
      <p className='text-[14px] font-normal text-[#eeeeee]'>{text}</p>
    </div>
  );
};

export default OkButton;
