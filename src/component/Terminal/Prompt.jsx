import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { helpIsOpenState } from 'src/state/helpIsOpen';

export default function Prompt({ setHistory }) {
  const [input, setInput] = useState('');
  const setHelpIsOpen = useSetRecoilState(helpIsOpenState);
  const handleChange = (e) => setInput(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      if (e.target.value === '') return;
      if (e.target.value === 'help') {
        setHelpIsOpen(true);
      }
      setHistory((prev) => [...prev, e.target.value]);
      setInput('');
    }
    if (e.key === 'ArrowUp') {
      console.log('ArrowUp');
    }
    if (e.key === 'ArrowDown') {
      console.log('ArrowDown');
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      console.log('Tab');
    }
  };

  return (
    <div className='mx-2 mb-1 flex justify-between'>
      <div className='animate-pulse text-xl font-bold text-green-400'>&gt;</div>
      <input
        autoFocus
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className='ml-2 flex-1 bg-black font-semibold text-white outline-none'
        type='text'
      />
    </div>
  );
}
