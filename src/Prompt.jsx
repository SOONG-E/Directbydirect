import { useState } from 'react';

export default function Prompt({ setHistory }) {
  const [input, setInput] = useState('');

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
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

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='mx-2 flex justify-between'>
      <div className='animate-pulse text-xl font-bold text-green-400'>&gt;</div>
      <input
        autoFocus
        value={input}
        onKeyDown={handleOnKeyDown}
        onChange={onChange}
        className='bg-black text-white'
        type='text'
      />
    </div>
  );
}
