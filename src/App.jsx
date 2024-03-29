import { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Alert from 'src/component/Alert/Alert';
import DirectoryTree from 'src/component/DirectoryTree/DirectoryTree';
import Help from 'src/component/Help/Help';
import InitialModal from 'src/component/InitialModal/InitialModal';
import NavBar from 'src/component/NavBar/NavBar';
import Terminal from 'src/component/Terminal/Terminal';
import { navBarState } from 'src/state/NavBar.state';
import { cwdState } from 'src/state/cwd';
import { rootState } from 'src/state/root';
import { showInputBoxState } from 'src/state/showInputBox';
import 'src/style/App.css';

function App() {
  const navBarRef = useRef(null);
  const helpRef = useRef(null);
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [visibility, setVisibility] = useState(true);
  const initialPhase = useRecoilValue(showInputBoxState);
  const root = useRecoilValue(rootState);
  const setComponentClicked = useSetRecoilState(navBarState);
  const setCwd = useSetRecoilState(cwdState);

  useEffect(() => {
    const handleResize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (initialPhase) return;
    setCwd([root]);
  }, [initialPhase, root, setCwd]);

  useEffect(() => {
    function handleFocus(e) {
      if (
        !navBarRef.current?.contains(e.target) &&
        !helpRef.current?.contains(e.target)
      ) {
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
  }, [navBarRef, setComponentClicked]);

  useEffect(() => {
    if (screen.width > 700 && screen.height > 600) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [screen]);

  return (
    <div
      className='flex h-full w-full bg-cover'
      style={{ backgroundImage: 'url(bg_main.png)' }}
    >
      {visibility ? (
        <div>
          <Terminal />
          {initialPhase ? <InitialModal /> : <DirectoryTree />}
          <Help helpRef={helpRef} />
        </div>
      ) : (
        <Alert text={'창이 너무 작아요!'} />
      )}
      <NavBar navBarRef={navBarRef} />
    </div>
  );
}

export default App;
