import { useState } from 'react';
import InputBox from 'src/component/InitialModal/InputBox/InputBox';
import WelcomeModal from 'src/component/InitialModal/WelcomeModal/WelcomeModal';

const InitialModal = () => {
  const [isIntroduction, setIsIntroduction] = useState(true);

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[#d9d9d9]/[50%]'>
        {isIntroduction ? (
          <WelcomeModal setIsIntroduction={setIsIntroduction} />
        ) : (
          <InputBox />
        )}
      </div>
    </div>
  );
};

export default InitialModal;
