import { useRecoilValue } from 'recoil';
import { historyState } from 'src/state/history';

export default function History() {
  const history = useRecoilValue(historyState);

  return (
    <div className='h-full overflow-y-auto'>
      {history.cmd.map((x, idx) => (
        <div className='ml-2 items-center' key={idx}>
          <div className='flex space-x-2'>
            <p className='text-xl font-bold text-green-400'>&gt;</p>
            <p className='pt-0.5 font-semibold text-white'>{x}</p>
          </div>
          <div className='flex'>
            <p className='font-semibold text-white'>{history.error[idx]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
