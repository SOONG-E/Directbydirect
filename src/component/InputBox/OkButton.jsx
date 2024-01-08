import classNames from 'classnames';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isValidRootState } from 'src/state/isValidRoot';
import { showInputboxState } from 'src/state/showInputBox';

const OkButton = ({ text }) => {
  const isValidRoot = useRecoilValue(isValidRootState);
  const setShowInputBox = useSetRecoilState(showInputboxState);

  const buttonClass = classNames(
    'h-[21px] w-[73px] rounded-[5px] drop-shadow bg-gradient-to-b',
    isValidRoot
      ? 'cursor-pointer from-[#1c6df5]/[42%] via-[#1c6df5]/[84%] to-[#1c6df5]'
      : 'pointer-events-none from-[#848484]/[42%] via-[#848484]/[84%] to-[#848484]'
  );

  const handleClick = () => setShowInputBox(false);

  return (
    <div onClick={handleClick} className={buttonClass}>
      <p className='text-[14px] font-normal text-[#eeeeee]'>{text}</p>
    </div>
  );
};

export default OkButton;
