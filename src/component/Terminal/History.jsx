import { useRecoilValue } from 'recoil';
import { historyState } from 'src/state/history';

export default function History() {
  const history = useRecoilValue(historyState);

  return (
    <div className='h-full overflow-y-auto'>
      {history.map((x, idx) => (
        <div className='ml-2 flex items-center' key={idx}>
          <div className='mr-2 text-xl font-bold text-green-400'>&gt;</div>
          <div className='font-semibold text-white'>{x}</div>
        </div>
      ))}
    </div>
  );
}
