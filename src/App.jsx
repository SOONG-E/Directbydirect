import { useEffect, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import DirectoryTree from 'src/component/DirectoryTree/DirectoryTree';
import Help from 'src/component/Help/help';
import InputBox from 'src/component/InputBox/InputBox';
import NavBar from 'src/component/NavBar/NavBar';
import Terminal from 'src/component/Terminal/Terminal';
import { navBarState } from 'src/state/NavBar.state';
import { showInputboxState } from 'src/state/showInputBox';
import 'src/style/App.css';

function App() {
  const navBarRef = useRef(null);
  const showInputBox = useRecoilValue(showInputboxState);
  const setComponentClicked = useSetRecoilState(navBarState);

  useEffect(() => {
    function handleFocus(e) {
      if (navBarRef.current && !navBarRef.current.contains(e.target)) {
        setComponentClicked((pre) =>
          pre.map((item) => {
            return { ...item, value: false };
          })
        );
      }
    }

    document.addEventListener('mouseup', handleFocus);
    return () => {
      document.removeEventListener('mouseup', handleFocus);
    };
  }, [navBarRef]);

  return (
    <div className="flex h-full w-full bg-[url('background.png')] bg-cover">
      <NavBar navBarRef={navBarRef} />
      <Terminal />
      {showInputBox ? <InputBox /> : <DirectoryTree />}
      <Help />
    </div>
  );
}

export default App;
