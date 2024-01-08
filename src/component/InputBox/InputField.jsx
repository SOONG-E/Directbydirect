import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { rootDirNameState } from 'src/state/rootDirName';

const InputField = () => {
  const [rootDirName, setRootDirName] = useRecoilState(rootDirNameState);
  const [isValid, setIsValid] = useState(true);
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setRootDirName(value);
    const regex = /^.{1,}$/;
    setIsValid(regex.test(value));
  };

  const inputClass = classNames(
    'mt-[6px] h-[23px] w-full rounded-[5px] border bg-white p-2 text-black drop-shadow focus:outline-none',
    {
      'animate-short-shake animate-duration-[175ms]': shake,
      'border-2 border-rose-500': !isValid,
    }
  );

  useEffect(() => {
    if (isValid) return;
    setTimeout(() => {
      setShake(true);
      setTimeout(() => setShake(false), 820);
    }, 200);
  }, [isValid]);

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
