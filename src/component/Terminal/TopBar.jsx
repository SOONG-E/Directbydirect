export default function TopBar() {
  return (
    <div className='bg-bar-gray flex justify-between rounded-t-md border border-gray-400 shadow-sm'>
      <div className='ml-2 flex items-center justify-center space-x-1'>
        <div className='aspect-square h-4 w-4 rounded-full bg-[#ff2b2b] shadow-md' />
        <div className='aspect-square h-4 w-4 rounded-full bg-[#ffc700] shadow-md' />
        <div className='aspect-square h-4 w-4 rounded-full bg-[#04b300] shadow-md' />
      </div>
      <p className='flex-1 font-semibold shadow-sm'>Terminal</p>
    </div>
  );
}
