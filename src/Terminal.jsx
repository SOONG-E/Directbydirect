import History from 'src/History';
import TopBar from 'src/TopBar';
import Command from 'src/command';

export default function Terminal() {
  return (
    <div className='flex h-5/6 w-1/3 flex-col justify-between rounded-md bg-black shadow-lg'>
      <TopBar />
      <History />
      <Command />
    </div>
  );
}
