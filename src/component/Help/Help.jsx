import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { useRecoilState } from 'recoil';
import { HELP } from 'src/constant/Help';
import { helpIsOpenState } from 'src/state/helpIsOpen';

const Help = () => {
  const helpPos = useSpring({ x: 0, y: 0 });
  const [targetCmd, setTargetCmd] = useState('');
  const [isOpened, setIsOpened] = useRecoilState(helpIsOpenState);
  const bindHelpPos = useDrag((params) => {
    helpPos.x.set(params.offset[0]);
    helpPos.y.set(params.offset[1]);
  });

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
      <animated.div
        {...bindHelpPos()}
        className='w-2/3 h-2/3'
        style={{
          x: helpPos.x,
          y: helpPos.y,
        }}
      >
        <div className='flex pl-2 space-x-1 h-5 items-center rounded-t-md border border-gray-400 bg-bar-gray shadow-sm'>
          <div
            onClick={onClose}
            className='aspect-square h-3 w-3 hover:ring-2 rounded-full bg-[#ff2b2b] shadow-md'
          />
          <div className='aspect-square h-3 w-3 rounded-full bg-[#ffc700] shadow-md' />
          <div className='aspect-square h-3 w-3 rounded-full bg-[#04b300] shadow-md' />
        </div>
        <div className='bg-[#efefef] w-full h-full bg-opacity-90 rounded-b-md drop-shadow'>
          {HELP.map((item, index) => {
            return (
              <div key={index} onClick={() => onClick(index)}>
                <h3>&gt; {item.CMD}</h3>
                {targetCmd === item.CMD && <p className=''>{item.TEXT}</p>}
              </div>
            );
          })}
        </div>
      </animated.div>
    )
  );
};

export default Help;
