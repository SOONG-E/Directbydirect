import { useEffect } from 'react';
import { HELP } from 'src/constant/Help';

const HelpManual = ({ targetIndex, setManualIsOpened }) => {
  useEffect(() => {
    return () => {
      setManualIsOpened(false);
    };
  });

  return (
    <div className='flex h-[600px] w-[600px] flex-1 flex-col items-center justify-center gap-2 rounded-3xl bg-white shadow-lg'>
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
      {HELP[targetIndex].EXPLAINMENT && (
        <div className='flex h-1/5 w-[70%] items-center justify-center whitespace-pre-wrap rounded-md bg-gray-50 font-mono shadow-md'>
          {HELP[targetIndex].EXPLAINMENT}
        </div>
      )}
    </div>
  );
};

export default HelpManual;
