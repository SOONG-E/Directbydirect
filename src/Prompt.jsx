import { useState } from 'react';

export default function Prompt({ setHistory }) {
  const [input, setInput] = useState('');
  const onEnter = (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      setHistory((prev) => [...prev, e.target.value]);
      setInput('');
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='mx-2 flex justify-between'>
      <div className='text-xl font-bold text-green-400'>&gt;</div>
      <input
        value={input}
        onKeyDown={onEnter}
        onChange={onChange}
        className='bg-black text-white'
        type='text'
      />
    </div>
  );
}
