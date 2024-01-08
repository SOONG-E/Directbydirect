import { useState } from 'react';
import Draggable from 'react-draggable';
import { useRecoilState } from 'recoil';
import { HELP } from 'src/constant/Help';
import { helpOpenState } from 'src/state/NavBar.state';

const Help = ({ navBarRef }) => {
  const [targetCmd, setTargetCmd] = useState('');
  const [isOpened, setIsOpened] = useRecoilState(helpOpenState);

  const onClick = (index) => {
    if (targetCmd === HELP[index].CMD) {
      setTargetCmd('');
      return;
    }
    setTargetCmd(HELP[index].CMD);
  };

  const onClose = () => {
    setIsOpened(!isOpened);
    console.log(isOpened);
  };

  return (
    isOpened && (
      <Draggable
        defaultPosition={{ x: 100, y: 100 }}
        bounds='body'
        ref={navBarRef}
      >
        <div className='absolute h-2/3 w-2/3'>
          <div className='flex h-5 items-center space-x-1 rounded-t-md border border-gray-400 bg-bar-gray pl-2 shadow-sm'>
            <div
              onClick={onClose}
              className='aspect-square h-3 w-3 rounded-full bg-[#ff2b2b] shadow-md hover:ring-2'
            />
            <div className='aspect-square h-3 w-3 rounded-full bg-[#ffc700] shadow-md' />
            <div className='aspect-square h-3 w-3 rounded-full bg-[#04b300] shadow-md' />
          </div>
          <div className='h-full w-full rounded-b-md bg-[#efefef] bg-opacity-90 drop-shadow'>
            {HELP.map((item, index) => {
              return (
                <div
                  className='group flex flex-col items-start p-2'
                  key={index}
                  onClick={() => onClick(index)}
                >
                  <h3 className=' group-hover:font-bold'>&gt; {item.CMD}</h3>
                  {targetCmd === item.CMD && <p className=''>{item.TEXT}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </Draggable>
    )
  );
};

export default Help;
