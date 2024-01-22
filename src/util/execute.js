import Builtin from 'src/util/Builitin';

const table = new Map();
table.set('cd', Builtin.cd);
table.set('chmod', Builtin.chmod);
table.set('clear', Builtin.clear);
table.set('cp', Builtin.cp);
table.set('help', Builtin.help);
table.set('mkdir', Builtin.mkdir);
table.set('mv', Builtin.mv);
table.set('pwd', Builtin.pwd);
table.set('rm', Builtin.rm);
table.set('touch', Builtin.touch);

const execute = (splittedCmd, obj) => {
  const cmd = splittedCmd[0];
  const arg = splittedCmd.slice(1);
  const func = table.get(cmd);
  if (func === undefined) {
    return { output: [], error: [`${cmd}: command not found`] };
  }
  return func(arg, obj);
};

export default execute;
