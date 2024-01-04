import { useRecoilState } from 'recoil';
import InputBoxHeader from 'src/component/InputBox/InputBoxHeader';
import OkButton from 'src/component/InputBox/OkButton';
import { rootDirNameState } from 'src/state/rootDirName';

const InputBox = () => {
  const [rootDirName, setRootDirName] = useRecoilState(rootDirNameState);

  const handleChange = (e) => setRootDirName(e.target.value);

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[#d9d9d9]/[50%]'>
        <div className='h-[140px] w-[465px] rounded-[5px] bg-[#eeeeee] drop-shadow'>
          <InputBoxHeader text='입력 창' />
          <div className='px-[35px] py-[18px]'>
            <p className='text-left text-[13px] font-semibold text-[#262626]'>
              루트 디렉터리의 이름을 입력해 주세요:
            </p>
            <input
              type='text'
              value={rootDirName}
              onChange={handleChange}
              className='mt-[6px] h-[23px] w-full rounded-[5px] border bg-white p-2 text-black drop-shadow'
            />
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
