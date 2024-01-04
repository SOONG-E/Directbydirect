import InputBox from 'src/InputBox';
import Terminal from 'src/Terminal';
import NavBar from 'src/component/NavBar/NavBar';
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
