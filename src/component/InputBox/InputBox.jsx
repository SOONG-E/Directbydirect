import { useState } from 'react';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[#d9d9d9]/[50%]'>
        <div className='h-[140px] w-[465px] rounded-[5px] bg-[#eeeeee] drop-shadow'>
          <div className='bg-bar-gray h-[25px] justify-center rounded-t-[5px] drop-shadow'>
            <p className='pt-[3.5px] text-[14px] font-semibold text-[#727272]'>
              입력 창
            </p>
          </div>
          <div className='px-[35px] py-[18px]'>
            <p className='text-left text-[13px] font-semibold text-[#262626]'>
              루트 디렉터리의 이름을 입력해 주세요:
            </p>
            <input
              type='text'
              value={inputValue}
              onChange={handleChange}
              className='mt-[6px] h-[23px] w-full rounded-[5px] border bg-white p-2 text-black drop-shadow'
            />
            <div className='mt-[11px] flex justify-end'>
              <div className='h-[21px] w-[73px] rounded-[5px] bg-gradient-to-b from-[#1c6df5]/[42%] via-[#1c6df5]/[84%] to-[#1c6df5] drop-shadow'>
                <p className='text-[14px] font-bold text-[#eeeeee]'>Go</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
