import NavBar from 'src/component/NavBar/NavBar';
import 'src/style/App.css';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url('background.png')`,
      }}
			className='h-full'
    >
      <NavBar />
      <div>본문</div>
    </div>
  );
}

export default App;
