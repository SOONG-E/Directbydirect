import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { CMD } from 'src/constant/Cmd';
import { helpOpenState } from 'src/state/NavBar.state';
import { cwdState } from 'src/state/cwd';
import { historyState } from 'src/state/history';
import execute from 'src/util/execute';
import splitCmd from 'src/util/splitCmd';

const FONT_WIDTH = 30;
const MAX_LENGTH = 50;

export default function Prompt() {
  const [cwd, setCwd] = useRecoilState(cwdState);
  const [history, setHistory] = useRecoilState(historyState);
  const setHelpIsOpen = useSetRecoilState(helpOpenState);
  const [cmdLine, setCmdLine] = useState('');
  const [recommendLine, setRecommendLine] = useState('');
  const historyIndex = useRef(history.cmd.length + 1);
  const changeIndex = (delta) => {
    const newIndex = historyIndex.current + delta;
    if (0 <= newIndex && newIndex <= history.cmd.length) {
      historyIndex.current = newIndex;
    }
  };

  const handleChange = (e) => setCmdLine(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      changeIndex(1);
      if (historyIndex.current === history.cmd.length) setCmdLine('');
      else setCmdLine(history.cmd[historyIndex.current].join(' '));
    }
    if (e.key === 'ArrowUp') {
      changeIndex(-1);
      if (historyIndex.current === history.cmd.length) setCmdLine('');
      else setCmdLine(history.cmd[historyIndex.current].join(' '));
      setTimeout(() => {
        e.target.setSelectionRange(MAX_LENGTH, MAX_LENGTH);
        e.target.scrollLeft = MAX_LENGTH * FONT_WIDTH;
      }, 0);
    }
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      const input = e.target.value;
      if (input === '') return;
      if (input === 'help') {
        setHelpIsOpen(true);
      }
      historyIndex.current = history.cmd.length + 1;
      setCmdLine('');
      const splittedCmd = splitCmd(input);
      const result = execute(splittedCmd, { cwd, setCwd });
      setHistory((prev) => {
        return {
          cmd: [...prev.cmd, splittedCmd],
          output: [...prev.output, result.output],
          error: [...prev.error, result.error],
        };
      });
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      setCmdLine(recommendLine);
    }
  };

  const autoComplete = () => {
    const splittedCmd = splitCmd(cmdLine);
    if (splittedCmd.length === 0) return;

    const target = splittedCmd.at(-1);
    const cmd = CMD.find((cmd) => cmd.startsWith(target));
    if (cmd === undefined) return;

    const addedText = cmd.substring(target.length);
    setRecommendLine((pre) => pre + addedText);
  };

  useEffect(() => {
    setRecommendLine(cmdLine);
    autoComplete();
  }, [cmdLine]);

  return (
    <div className='relative mx-2 mb-1 flex justify-between'>
      <div className='animate-pulse text-xl font-bold text-green-400'>&gt;</div>
      <input
        autoFocus
        value={cmdLine}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className=' absolute left-3 top-0.5 z-10 ml-2 flex-1 bg-black bg-transparent font-semibold text-white outline-none'
        type='text'
      />
      <div className='font-sm absolute left-5 top-0.5 whitespace-break-spaces font-semibold text-gray-400'>
        {recommendLine}
      </div>
    </div>
  );
}
