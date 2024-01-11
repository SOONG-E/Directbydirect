const HelpManual = ({ targetIndex, setManualIsOpened }) => {
  return (
    <div className='absolute left-[12.5%] top-[12.5%] flex h-3/4 w-3/4 items-center justify-center rounded-3xl bg-white shadow-lg'>
      <div
        onClick={() => setManualIsOpened(false)}
        className='absolute left-5 top-5 flex aspect-square h-8 w-8 items-center justify-center rounded-full font-semibold hover:bg-gray-50 hover:font-bold hover:shadow-md'
      >
        &lt;
      </div>
      {targetIndex}
    </div>
  );
};

export default HelpManual;
