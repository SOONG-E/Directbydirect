import InputBox from 'src/component/InputBox/InputBox';
import NavBar from 'src/component/NavBar/NavBar';
import Terminal from 'src/component/Terminal/Terminal';
import 'src/style/App.css';
import DirectoryTree from 'src/component/DirectoryTree/DirectoryTree';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url('background.png')`,
      }}
      className='flex h-full w-full bg-cover'
    >
      <NavBar />
      <Terminal />
      <DirectoryTree />
      <InputBox />
    </div>
  );
}

export default App;
