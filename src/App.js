import { createContext, useState } from 'react';
import Header from './component/infoBar/Header';
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
    const root = new Tree(direc, TYPE.DIR);
    setCwd([root]);
    setRoot(root);
  };

  return (
    <>
      <Wrapper>
        <Header />
        <MidleWrapper>
          {cwd.length > 0 ? (
            <Interation.Provider
              value={{ record, setRecord, cwd, setCwd, root }}
            >
              <Command />
              <View />
            </Interation.Provider>
          ) : (
            <Directory onDirec={onDirec} />
          )}
        </MidleWrapper>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  font-family: system-ui;
  color: white;
  background-color: #213c4b;
  height: 100%;
`;

const MidleWrapper = styled.div`
  display: flex;
  height: 85%;
`;
