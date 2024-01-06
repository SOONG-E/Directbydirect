import { RecoilRoot } from 'recoil';
import DirectoryTree from 'src/component/DirectoryTree/DirectoryTree';
import Help from 'src/component/Help/help';
import InputBox from 'src/component/InputBox/InputBox';
import NavBar from 'src/component/NavBar/NavBar';
import Terminal from 'src/component/Terminal/Terminal';
import 'src/style/App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="flex h-full w-full bg-cover bg-[url('background.png')]">
        <NavBar />
        <Terminal />
        <DirectoryTree />
        <Help />
        <InputBox />
      </div>
    </RecoilRoot>
  );
}

export default App;
