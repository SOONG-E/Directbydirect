const OkButton = ({ text }) => {
  return (
    <div className='h-[21px] w-[73px] rounded-[5px] bg-gradient-to-b from-[#1c6df5]/[42%] via-[#1c6df5]/[84%] to-[#1c6df5] drop-shadow'>
      <p className='text-[14px] font-normal text-[#eeeeee]'>{text}</p>
    </div>
  );
};

export default OkButton;
