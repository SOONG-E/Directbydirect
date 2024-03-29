import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { HELP } from 'src/constant/Help';
import { helpOpenState } from 'src/state/NavBar.state';

const HelpCmdList = ({ setTargetIndex, setIsOpened, setManualIsOpened }) => {
  const [targetCmd, setTargetCmd] = useState('');
  const [showClear, setShowClear] = useState(false);
  const helpState = useSetRecoilState(helpOpenState);

  const handleHoverEvent = (isIn) => {
    setShowClear(isIn ? true : false);
  };

  const handleManualOpen = (index) => {
    setTargetIndex(index);
    setManualIsOpened(true);
  };

  const onClose = () => {
    setIsOpened((pre) => !pre);
    helpState(false);
  };

  return (
    <div className='h-[600px] w-[600px]'>
      <div className='flex h-5 items-center space-x-1 rounded-t-md border border-gray-400 bg-bar-gray pl-2 shadow-sm'>
        <div
          onClick={onClose}
          onMouseEnter={() => handleHoverEvent(true)}
          onMouseLeave={() => handleHoverEvent(false)}
          className='flex aspect-square h-3  w-3 items-center justify-center rounded-full bg-[#ff2b2b] shadow-md hover:ring-2'
        >
          {showClear && <img src='clear.png' className='h-1.5 w-1.5' />}
        </div>
        <div className='aspect-square h-3 w-3 rounded-full bg-[#ffc700] shadow-md' />
        <div className='aspect-square h-3 w-3 rounded-full bg-[#04b300] shadow-md' />
      </div>
      <div className='grid h-full w-full grid-cols-3 gap-4 rounded-b-md bg-[#efefef] bg-opacity-90 drop-shadow'>
        {HELP.map((item, index) => {
          return (
            <div
              className='group flex cursor-pointer flex-col items-center justify-center rounded-md hover:bg-gray-200 hover:shadow-inner'
              key={index}
              onClick={() => handleManualOpen(index)}
              onMouseEnter={() => setTargetCmd(HELP[index].CMD)}
              onMouseLeave={() => setTargetCmd('')}
            >
              <h3 className='text-3xl font-semibold group-hover:font-bold'>
                {item.CMD}
              </h3>
              <p className={`${targetCmd !== item.CMD && 'invisible'}`}>
                {item.TEXT}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HelpCmdList;
