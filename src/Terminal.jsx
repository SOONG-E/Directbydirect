import History from 'src/History';
import TopBar from 'src/TopBar';
import Prompt from 'src/Prompt';
import { useState } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState([]);

  return (
    <div className='flex h-5/6 w-1/3 flex-col justify-between rounded-md bg-black shadow-lg'>
      <TopBar />
      <History history={history} />
      <Prompt setHistory={setHistory} />
    </div>
  );
}
