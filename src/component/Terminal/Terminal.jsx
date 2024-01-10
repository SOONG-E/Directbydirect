import { useState } from 'react';
import Draggable from 'react-draggable';
import History from 'src/component/Terminal/History';
import Prompt from 'src/component/Terminal/Prompt';
import TopBar from 'src/component/Terminal/TopBar';

export default function Terminal() {
  const [history, setHistory] = useState([]);

  return (
    <Draggable defaultPosition={{ x: 10, y: 50 }} bounds='body'>
      <div className='absolute flex h-5/6 min-h-96 w-1/3 min-w-60 flex-col justify-between rounded-md bg-black shadow-lg'>
        <TopBar title='Terminal' />
        <History history={history} />
        <Prompt history={history} setHistory={setHistory} />
      </div>
    </Draggable>
  );
}
