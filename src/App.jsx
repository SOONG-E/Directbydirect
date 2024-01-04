import InputBox from 'src/component/InputBox/InputBox';
import NavBar from 'src/component/NavBar/NavBar';
import Terminal from 'src/component/Terminal/Terminal';
import 'src/style/App.css';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url('background.png')`,
      }}
      className='h-full bg-cover'
    >
      <NavBar />
      <Terminal />
      <InputBox />
    </div>
  );
}

export default App;
