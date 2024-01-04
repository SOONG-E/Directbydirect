import { useRecoilValue } from 'recoil';
import DirectoryTree from 'src/component/DirectoryTree/DirectoryTree';
import InputBox from 'src/component/InputBox/InputBox';
import NavBar from 'src/component/NavBar/NavBar';
import Terminal from 'src/component/Terminal/Terminal';
import { showInputboxState } from 'src/state/showInputBox';
import 'src/style/App.css';

function App() {
  const showInputBox = useRecoilValue(showInputboxState);

  return (
    <div className="flex h-full w-full bg-[url('background.png')] bg-cover">
      <NavBar />
      <Terminal />
      {showInputBox ? <InputBox /> : <DirectoryTree />}
    </div>
  );
}

export default App;
