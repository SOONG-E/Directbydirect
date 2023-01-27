import { useState, useEffect } from 'react';
import Header from './header/Header';
import Command from './command/Command';
import View from './view/View';
import Footer from './infoBar/Footer';
import Directory from './init/Directory';
import Tree from './model/Tree';
import { TYPE } from './constants/Type';

function App() {
  const [record, setRecord] = useState([]); //command 기록
  const [pwd, setPwd] = useState([]); // 현재 경로(스택)
  const [root, setRoot] = useState(); // Root

  const onDirec = (direc) => {
    let root = new Tree(direc, TYPE.DIR);
    setPwd([root]);
    setRoot(root);
  };

  return (
    <div>
      <Header />
      {pwd.length > 0 ? (
        <div className='App'>
          <Command
            record={record}
            setRecord={setRecord}
            pwd={pwd}
            setPwd={setPwd}
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
cp mv mkdir rm touch chmod cd pwd
directed graph, vertex: 
*/

export default App;
