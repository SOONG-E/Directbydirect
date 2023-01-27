import styled from 'styled-components';
import History from './History';
import Prompt from './Prompt';
import { useState, useEffect } from 'react';
import Builtin from '../model/Builitin';

const table = new Map();
table.set('cd', Builtin.cd);
table.set('chmod', Builtin.chmod);
table.set('cp', Builtin.cp);
table.set('mkdir', Builtin.mkdir);
table.set('mv', Builtin.mv);
table.set('rm', Builtin.rm);
table.set('touch', Builtin.touch);

const execute = (splittedCommand, props) => {
  const cmd = splittedCommand[0];
  const arg = splittedCommand.slice(1);
  const func = table.get(cmd);

  if (func === undefined) {
    // props.setRecord([...props.record, '잘못 입력 하셨습니다.']);
    console.log('잘못 입력 하셨습니다.');
    return;
  }
  func(arg, props);
};

const Command = (props) => {
  const [lastCommand, setLastCommand] = useState('');

  useEffect(() => {
    if (lastCommand.length === 0) return;
    const splittedCommand = lastCommand.split(' ');
    props.setRecord([...props.record, splittedCommand]);
    execute(splittedCommand, props);
    setLastCommand('');
  }, [lastCommand]);

  return (
    <Box>
      Command
      <div>{lastCommand}</div>
      <History record={props.record} />
      <Prompt addCommand={setLastCommand} />
    </Box>
  );
};

export default Command;

const Box = styled.div``;
