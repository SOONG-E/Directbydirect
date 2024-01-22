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
      {history.cmd.slice(historyStart).map((value, index) => {
        const i = historyStart + index;
        const output = history.output[i];
        const error = history.error[i];
        const messages = error.length === 0 ? output : error;
        return (
          <div key={index} className='mx-2 items-center'>
            <div className='flex space-x-2'>
              <p className='text-xl font-bold text-green-400'>&gt;</p>
              <p className='break-all pt-0.5 text-left font-semibold text-white'>
                {value.join(' ')}
              </p>
            </div>
            {messages.map((msg, idx) => (
              <div key={idx} className='flex'>
                <p className='whitespace-pre-wrap break-all text-left font-semibold text-white'>
                  {msg}
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
