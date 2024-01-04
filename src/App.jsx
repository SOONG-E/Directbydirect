import DirectoryTree from 'src/component/DirectoryTree/DirectoryTree';
import InputBox from 'src/component/InputBox/InputBox';
import NavBar from 'src/component/NavBar/NavBar';
import Terminal from 'src/component/Terminal/Terminal';
import 'src/style/App.css';

function App() {
  return (
    <div className="flex h-full w-full bg-cover bg-[url('background.png')]">
      <NavBar />
      <Terminal />
      <DirectoryTree />
      <InputBox />
    </div>
  );
}

export default App;
