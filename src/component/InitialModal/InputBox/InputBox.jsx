import { useRecoilValue, useSetRecoilState } from 'recoil';
import InputBoxHeader from 'src/component/InitialModal/InputBox/InputBoxHeader';
import InputField from 'src/component/InitialModal/InputBox/InputField';
import OkButton from 'src/component/common/OkButton';
import { isValidRootState } from 'src/state/isValidRoot';
import { showInputboxState } from 'src/state/showInputBox';

const InputBox = () => {
  const isValidRoot = useRecoilValue(isValidRootState);
  const setShowInputBox = useSetRecoilState(showInputboxState);

  const handleClick = () => setShowInputBox(false);

  return (
    <div className='h-[140px] w-[465px] rounded-[5px] bg-[#eeeeee] drop-shadow'>
      <InputBoxHeader text='입력 창' />
      <div className='px-[35px] py-[18px]'>
        <p className='text-left text-[13px] font-semibold text-[#262626]'>
          루트 디렉터리의 이름을 입력해 주세요:
        </p>
        <InputField />
        <div className='mt-[11px] flex justify-end'>
          <OkButton onClick={handleClick} text='Go' disable={!isValidRoot} />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
