import { HELP } from 'src/constant/Help';

const HelpManual = ({ targetIndex, setManualIsOpened, navBarRef }) => {
  return (
    <div
      ref={navBarRef}
      className='absolute left-[12.5%] top-[12.5%] flex h-3/4 w-3/4 flex-col items-center justify-center gap-2 rounded-3xl bg-white shadow-lg'
    >
      <div
        onClick={() => setManualIsOpened(false)}
        className='absolute left-5 top-5 flex aspect-square h-8 w-8 items-center justify-center rounded-full font-semibold hover:bg-gray-50 hover:font-bold hover:shadow-md'
      >
        &lt;
      </div>
      <div className='text-7xl'>{HELP[targetIndex].ICON}</div>
      <div className='animate-jump-in text-5xl font-semibold drop-shadow-md'>
        {HELP[targetIndex].CMD}
      </div>
      <div className=''>{HELP[targetIndex].CONTENT}</div>
      <div>
        <span>Ex: </span>
        {HELP[targetIndex].EXAMPLE}
      </div>
    </div>
  );
};

export default HelpManual;
