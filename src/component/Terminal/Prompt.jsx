import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { helpOpenState } from 'src/state/NavBar.state';

export default function Prompt({ history, setHistory }) {
  const [input, setInput] = useState('');
  const [location, setLocation] = useState(0);
  const setHelpIsOpen = useSetRecoilState(helpOpenState);

  const handleChange = (e) => setInput(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      if (e.target.value === '') return;
      if (e.target.value === 'help') {
        setHelpIsOpen(true);
      }
      setHistory((prev) => [...prev, e.target.value]);
      setInput('');
      setLocation(0);
    }
    if (e.key === 'ArrowUp' && 0 < history.length) {
      setLocation((pre) => (-pre === history.length ? pre : pre - 1));
    }
    if (e.key === 'ArrowDown' && 0 < history.length) {
      setLocation((pre) => (pre === 0 ? 0 : pre + 1));
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      console.log('Tab');
    }
  };

  useEffect(() => {
    setInput(location === 0 ? '' : history.at(location));
  }, [location]);

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
