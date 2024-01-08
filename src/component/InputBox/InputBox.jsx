import InputBoxHeader from 'src/component/InputBox/InputBoxHeader';
import InputField from 'src/component/InputBox/InputField';
import OkButton from 'src/component/InputBox/OkButton';

const InputBox = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[#d9d9d9]/[50%]'>
        <div className='h-[140px] w-[465px] rounded-[5px] bg-[#eeeeee] drop-shadow'>
          <InputBoxHeader text='입력 창' />
          <div className='px-[35px] py-[18px]'>
            <p className='text-left text-[13px] font-semibold text-[#262626]'>
              루트 디렉터리의 이름을 입력해 주세요:
            </p>
            <InputField />
            <div className='mt-[11px] flex justify-end'>
              <OkButton text='Go' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
