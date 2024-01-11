import { useState } from 'react';
import Draggable from 'react-draggable';
import { useRecoilState } from 'recoil';
import HelpManual from 'src/component/Help/HelpManual';
import { HELP } from 'src/constant/Help';
import { helpOpenState } from 'src/state/NavBar.state';

const Help = ({ navBarRef }) => {
  const [targetCmd, setTargetCmd] = useState('');
  const [targetIndex, setTargetIndex] = useState(null);
  const [showClear, setShowClear] = useState(false);
  const [isOpened, setIsOpened] = useRecoilState(helpOpenState);
  const [manualIsOpened, setManualIsOpened] = useState(false);

  const handleManualOpen = (index) => {
    setTargetIndex(index);
    setManualIsOpened(true);
  };

  const onClose = () => {
    setIsOpened(!isOpened);
  };

  const handleHoveEvent = (isIn) => {
    setShowClear(isIn ? true : false);
  };
  return (
    isOpened && (
      <Draggable defaultPosition={{ x: 100, y: 100 }} bounds='body'>
        {!manualIsOpened ? (
          <div className='absolute h-2/3 w-2/3' ref={navBarRef}>
            <div className='flex h-5 items-center space-x-1 rounded-t-md border border-gray-400 bg-bar-gray pl-2 shadow-sm'>
              <div
                onClick={onClose}
                onMouseEnter={() => handleHoveEvent(true)}
                onMouseLeave={() => handleHoveEvent(false)}
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
                    {
                      <p className={`${targetCmd !== item.CMD && 'invisible'}`}>
                        {item.TEXT}
                      </p>
                    }
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <HelpManual
            targetIndex={targetIndex}
            setManualIsOpened={setManualIsOpened}
            navBarRef={navBarRef}
          />
        )}
      </Draggable>
    )
  );
};

export default Help;
