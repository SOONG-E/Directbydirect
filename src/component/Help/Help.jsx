import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { HELPTEXT } from 'src/constant/Help';

const Help = () => {
  const helpPos = useSpring({ x: 0, y: 0 });
  const bindHelpPos = useDrag((params) => {
    helpPos.x.set(params.offset[0]);
    helpPos.y.set(params.offset[1]);
  });
  return (
    <animated.div
      {...bindHelpPos()}
      className='w-1/2 h-1/2'
      style={{
        x: helpPos.x,
        y: helpPos.y,
      }}
    >
      <div className='flex pl-2 space-x-1 h-5 items-center rounded-t-md border border-gray-400 bg-bar-gray shadow-sm'>
        <div className='aspect-square h-3 w-3 rounded-full bg-[#ff2b2b] shadow-md' />
        <div className='aspect-square h-3 w-3 rounded-full bg-[#ffc700] shadow-md' />
        <div className='aspect-square h-3 w-3 rounded-full bg-[#04b300] shadow-md' />
      </div>
      <div className='bg-[#efefef] w-full h-full bg-opacity-90 rounded-b-md drop-shadow'>
        {HELPTEXT.map((item, index) => {
          <div key={index}>{item.cd}</div>;
        })}
      </div>
    </animated.div>
  );
};

export default Help;
