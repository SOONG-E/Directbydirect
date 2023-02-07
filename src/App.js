import { createContext, useEffect, useState } from 'react';
import Header from './component/header/Header';
import Command from './component/command/Command';
import View from './component/view/View';
import Footer from './component/infoBar/Footer';
import Directory from './component/init/Directory';
import Tree from './model/Tree';
import { TYPE } from './constants/Type';
import styled from 'styled-components';

export const Interation = createContext();

function App() {
  const [record, setRecord] = useState({ cmd: [], error: [] }); //command 기록
  const [cwd, setCwd] = useState([]); // 현재 경로(스택)
  const [root, setRoot] = useState(); // Root

  const onDirec = (direc) => {
    let root = new Tree(direc, TYPE.DIR);
    setCwd([root]);
    setRoot(root);
  };

  useEffect(() => {
    console.log('root state changed');
  }, [root]);

  return (
    <div>
      <Header />
      {cwd.length > 0 ? (
        <Wrapper>
          <Interation.Provider value={{ record, setRecord, cwd, setCwd, root }}>
            <Command />
            <View />
          </Interation.Provider>
        </Wrapper>
      ) : (
        <Directory onDirec={onDirec} />
      )}
      <Footer />
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;
