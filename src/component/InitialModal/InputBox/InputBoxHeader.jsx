const InputBoxHeader = ({ text }) => {
  return (
    <div className='h-[25px] justify-center rounded-t-[5px] bg-bar-gray drop-shadow'>
      <p className='pt-[3.5px] text-[14px] font-semibold text-[#727272]'>
        {text}
      </p>
    </div>
  );
};

export default InputBoxHeader;
