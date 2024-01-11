import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { historyState } from 'src/state/history';
import { historyStartState } from 'src/state/historyStart';

export default function History() {
  const history = useRecoilValue(historyState);
  const historyStart = useRecoilValue(historyStartState);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className='h-full overflow-y-auto' ref={scrollRef}>
      {history.cmd.slice(historyStart).map((x, idx) => (
        <div className='ml-2 items-center' key={idx}>
          <div className='flex space-x-2'>
            <p className='text-xl font-bold text-green-400'>&gt;</p>
            <p className='pt-0.5 font-semibold text-white'>{x.join(' ')}</p>
          </div>
          <div className='flex'>
            <p className='font-semibold text-white'>{history.error[idx]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
