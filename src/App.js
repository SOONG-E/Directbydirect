import { useState, useEffect } from 'react';
import Header from './component/header/Header';
import Command from './component/command/Command';
import View from './component/view/View';
import Footer from './component/infoBar/Footer';
import Directory from './component/init/Directory';
import Tree from './model/Tree';
import { TYPE } from './constants/Type';

function App() {
  const [record, setRecord] = useState([]); //command 기록
  const [cwd, setCwd] = useState([]); // 현재 경로(스택)
  const [root, setRoot] = useState(); // Root

  const onDirec = (direc) => {
    let root = new Tree(direc, TYPE.DIR);
    setCwd([root]);
    setRoot(root);
  };

  return (
    <div>
      <Header />
      {cwd.length > 0 ? (
        <div className='App'>
          <Command
            record={record}
            setRecord={setRecord}
            cwd={cwd}
            setCwd={setCwd}
            root={root}
          />
          <View directory={root.getName()} />
        </div>
      ) : (
        <Directory onDirec={onDirec} />
      )}
      <Footer />
    </div>
  );
}

/* 명령어
cp mv mkdir rm touch chmod cd cwd
directed graph, vertex: 
*/

export default App;
