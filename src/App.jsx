import { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import DirectoryTree from 'src/component/DirectoryTree/DirectoryTree';
import Help from 'src/component/Help/Help';
import InitialModal from 'src/component/InitialModal/InitialModal';
import NavBar from 'src/component/NavBar/NavBar';
import Terminal from 'src/component/Terminal/Terminal';
import { navBarState } from 'src/state/NavBar.state';
import { rootState } from 'src/state/root';
import { rootDirNameState } from 'src/state/rootDirName';
import { showInputboxState } from 'src/state/showInputBox';
import 'src/style/App.css';

function App() {
  const navBarRef = useRef(null);
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [visibility, setVisibility] = useState(true);
  const initialPhase = useRecoilValue(showInputboxState);
  const root = useRecoilValue(rootState);
  const rootDirName = useRecoilValue(rootDirNameState);
  const setComponentClicked = useSetRecoilState(navBarState);

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
    root.setName(rootDirName);
  }, [initialPhase, root, rootDirName]);

  useEffect(() => {
    function handleFocus(e) {
      if (!navBarRef.current?.contains(e.target)) {
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
    if (screen.width > 540 && screen.height > 600) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [screen]);

  return (
    <div className="flex h-full w-full bg-[url('background.png')] bg-cover">
      {visibility && (
        <div>
          <Terminal />
          {initialPhase ? <InitialModal /> : <DirectoryTree />}
          <Help navBarRef={navBarRef} />
        </div>
      )}
      <NavBar navBarRef={navBarRef} />
    </div>
  );
}

export default App;
