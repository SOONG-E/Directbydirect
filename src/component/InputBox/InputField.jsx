import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isValidRootState } from 'src/state/isValidRoot';
import { rootDirNameState } from 'src/state/rootDirName';

const InputField = () => {
  const [isValidRoot, setIsValidRoot] = useRecoilState(isValidRootState);
  const [rootDirName, setRootDirName] = useRecoilState(rootDirNameState);
  const [init, setInit] = useState(true);
  const [shake, setShake] = useState(false);

  const inputClass = classNames(
    'mt-[6px] h-[23px] w-full rounded-[5px] border bg-white p-2 text-black drop-shadow focus:outline-none',
    {
      'animate-short-shake animate-duration-[175ms]': shake,
      'border-2 border-rose-500': !init && !isValidRoot,
    }
  );

  const handleChange = (e) => {
    setInit(false);
    const value = e.target.value;
    setRootDirName(value);
    const regex = /^.{1,}$/;
    setIsValidRoot(regex.test(value));
  };

  useEffect(() => {
    if (init) return;
    if (isValidRoot) return;
    setTimeout(() => {
      setShake(true);
      setTimeout(() => setShake(false), 820);
    }, 200);
  }, [init, isValidRoot]);

  return (
    <input
      type='text'
      value={rootDirName}
      onChange={handleChange}
      className={inputClass}
      maxLength={20}
    />
  );
};

export default InputField;
