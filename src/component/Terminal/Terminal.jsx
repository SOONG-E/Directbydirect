import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import History from 'src/component/Terminal/History';
import Prompt from 'src/component/Terminal/Prompt';
import TopBar from 'src/component/Terminal/TopBar';

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const terminalPos = useSpring({ x: 10, y: 50 });
  const bindTerminalPos = useDrag((params) => {
    terminalPos.x.set(params.offset[0]);
    terminalPos.y.set(params.offset[1]);
  });
  return (
    <animated.div
      {...bindTerminalPos()}
      className='absolute flex h-5/6 min-h-96 w-1/3 min-w-60 flex-col justify-between rounded-md bg-black shadow-lg'
      style={{
        x: terminalPos.x,
        y: terminalPos.y,
      }}
    >
      <TopBar title='Terminal' />
      <History history={history} />
      <Prompt setHistory={setHistory} />
    </animated.div>
  );
}
