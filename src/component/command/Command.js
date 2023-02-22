import { useContext, useEffect, useState } from 'react';
import { Interaction } from '../../App';
import History from './History';
import Prompt from './Prompt';
import Builtin from '../../model/Builitin';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

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
    return [`${cmd}: command not found`];
  }
  return func(arg, props);
};

const Command = () => {
  const props = useContext(Interaction);
  const [lastCommand, setLastCommand] = useState('');

  useEffect(() => {
    if (lastCommand.length === 0) return;
    const splittedCommand = lastCommand
      .trim()
      .split(' ')
      .filter((word) => word.length > 0);
    const error = execute(splittedCommand, props);
    props.setRecord((prev) => {
      return {
        cmd: [...prev.cmd, splittedCommand],
        error: [...prev.error, error],
      };
    });
    setLastCommand('');
  }, [lastCommand]);

  return (
    <CommandBox>
      <History />
      <Prompt cmd={props.record.cmd} addCommand={setLastCommand} />
    </CommandBox>
  );
};

export default Command;

const CommandBox = styled(Box)`
  margin-top: 18px;
  margin-left: 18px;
  margin-bottom: 18px;
  width: 33vw;
  border-radius: 5px;
  background-color: #0a1929;
`;
