import classNames from 'classnames';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isValidRootState } from 'src/state/isValidRoot';
import { showInputboxState } from 'src/state/showInputBox';

const OkButton = ({ text }) => {
  const isValidRoot = useRecoilValue(isValidRootState);
  const setShowInputBox = useSetRecoilState(showInputboxState);

  const bgColor = isValidRoot ? '#1c6df5' : '#848484';
  const buttonClass = classNames(
    `h-[21px] w-[73px] rounded-[5px] drop-shadow bg-gradient-to-b from-[${bgColor}]/[42%] via-[${bgColor}]/[84%] to-[${bgColor}]`,
    isValidRoot ? 'cursor-pointer' : 'pointer-events-none'
  );

  const handleClick = () => setShowInputBox(false);

  return (
    <div onClick={handleClick} className={buttonClass}>
      <p className='text-[14px] font-normal text-[#eeeeee]'>{text}</p>
    </div>
  );
};

export default OkButton;
