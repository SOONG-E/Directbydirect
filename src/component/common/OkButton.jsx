import classNames from 'classnames';

const OkButton = ({ onClick, text, disable = false }) => {
  const buttonClass = classNames(
    'h-[21px] w-[73px] rounded-[5px] drop-shadow bg-gradient-to-b',
    disable
      ? 'pointer-events-none from-[#848484]/[42%] via-[#848484]/[84%] to-[#848484]'
      : 'cursor-pointer from-[#1c6df5]/[42%] via-[#1c6df5]/[84%] to-[#1c6df5]'
  );

  return (
    <div onClick={onClick} className={buttonClass}>
      <p className='text-[14px] font-normal text-[#eeeeee]'>{text}</p>
    </div>
  );
};

export default OkButton;
