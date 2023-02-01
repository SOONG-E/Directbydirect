import { TYPE } from '../constants/Type';
import Tree from './Tree';

const Builtin = {
  getNode(cwd, splittedPath) {
    const tempWd = [...cwd];

    for (let i = 0; i < splittedPath.length; ++i) {
      if (splittedPath[i] === '..' && cwd.length != 1) {
        tempWd.pop();
      } else if (splittedPath[i] !== '.') {
        const subTree = tempWd.at(-1).getChild().get(splittedPath[i]);
        if (subTree === undefined) {
          if (i === splittedPath.length - 1) {
            return { leafNode: undefined, lastDir: tempWd.at(-1) };
          } else {
            return undefined;
          }
        }
        if (i === splittedPath.length - 1) {
          return { leafNode: subTree, lastDir: tempWd.at(-1) };
        }
        if (subTree.getType() === TYPE.DIR) {
          tempWd.push(subTree);
        } else if (subTree.getType() === TYPE.FILE) {
          console.log('not a directory');
        }
      }
    }
    return { leafNode: tempWd.at(-1), lastDir: tempWd.at(-1) };
  },

  cd(arg, { cwd, setCwd }) {
    const path = arg[0].split('/');

    path.forEach((element) => {
      if (element === '..' && cwd.length != 1) {
        cwd.pop();
      } else if (element !== '.') {
        const subTree = cwd.at(-1).getChild().get(element);
        if (subTree === undefined) {
          //error cd: no such file or directory:arg[0]
        } else if (subTree.getType() === TYPE.DIR) {
          setCwd([...cwd, subTree]);
        } else {
          // cd: not a directory: ../file
        }
      }
    });
  },

  cp(arg, { cwd }) {
    if (arg.length !== 2) {
      //에러 핸들링
      console.log(
        'usage: cp [-R [-H | -L | -P]] [-fi | -n] [-aclpsvXx] source_file target_file'
      );
    }
    const splittedSrc = arg[0].split('/');
    const src = Builtin.getNode(cwd, splittedSrc);
    if (src === undefined || src.leafNode === undefined) {
      console.log('//error cp: no such file or directory:arg[0]');
      return;
    } else if (src.leafNode.getType() === TYPE.DIR) {
      console.log('//arg[0] is a directory (not copied).');
      return;
    }

    const splittedDest = arg[1].split('/');
    const dest = Builtin.getNode(cwd, splittedDest);
    if (dest === undefined) {
      console.log('//error cp: no such file or directory:arg[0]');
      return;
    }
    if (dest.leafNode === undefined) {
      dest.lastDir.addChild(
        new Tree(splittedDest.at(-1), src.leafNode.getType())
      );
    } else if (dest.leafNode.getType() === TYPE.DIR) {
      dest.leafNode.addChild(src.leafNode);
    } else if (dest.leafNode.getType() === TYPE.FILE) {
      if (src.leafNode.getName() === dest.leafNode.getName()) {
        console.log('cp: a and a are identical (not copied).');
        return;
      }
      dest.lastDir.addChild(src.leafNode, true);
    }
  },

  mkdir(arg, { cwd }) {
    arg.forEach((element) => {
      const dir = new Tree(element, TYPE.DIR);
      cwd.at(-1).addChild(dir);
    });
  },

  mv(arg, { cwd }) {
    if (arg.length === 1) {
      console.log('mv는 기본적으로 인자가 두개란다??zzzzz');
      return;
    }
    const splittedLastArg = arg.at(-1).split('/');
    const lastArg = Builtin.getNode(cwd, splittedLastArg);
    if (arg.length > 2) {
      if (lastArg === undefined) {
        console.log('is not a directory');
        return;
      } else if (
        lastArg.leafNode === undefined ||
        lastArg.leafNode.getType() !== TYPE.DIR
      ) {
        console.log('is not a directory');
        return;
      }
    }
    const dummy = [];
    const errorDummy = [];
    let tempTree;
    for (let i = 0; i < arg.length - 1; ++i) {
      const splittedArg = arg[i].split('/');
      tempTree = Builtin.getNode(cwd, splittedArg);
      if (tempTree === undefined || tempTree.leafNode === undefined) {
        errorDummy.push([arg[i], 'No such file or directory']);
      } else {
        dummy.push(tempTree);
      }
    }
    if (
      arg.length === 2 &&
      dummy.length === 1 &&
      (lastArg.leafNode === undefined ||
        lastArg.leafNode.getType() === TYPE.FILE)
    ) {
      tempTree = dummy[0].leafNode;
      dummy[0].lastDir.getChild().delete(tempTree.getName());
      lastArg.lastDir.addChild(
        new Tree(splittedLastArg.at(-1), TYPE.FILE),
        true
      );
    } else {
      dummy.forEach((element) => {
        tempTree = element.leafNode;
        element.lastDir.getChild().delete(element.leafNode.getName());
        lastArg.leafNode.addChild(tempTree);
      });
    }
    errorDummy.forEach((err) => {
      console.log('error', err[0], err[1]);
    });
  },

  rm(arg, { cwd, root }) {
    for (let i = 0; i < arg.length; i++) {
      if (arg[i] === '-rf') continue;
      const splittedArg = arg[i].split('/');
      const node = Builtin.getNode(cwd, splittedArg);
      console.log(`${arg[i]}을 삭제 하시겠습니까?? Yes / No`);
      if (node === undefined || node.leafNode === undefined) return;
      const type = node.leafNode.getType();
      if (i === 0 && type === TYPE.DIR) {
        console.log(`${arg[i]} is a directory`);
        return;
      }
      node.lastDir.getChild().delete(splittedArg.at(-1));
    }
  },

  touch(arg, { cwd }) {
    arg.forEach((element) => {
      const splittedPath = element.split('/');
      const path = Builtin.getNode(cwd, splittedPath);
      if (path === undefined || path.leafNode !== undefined) return;
      const file = new Tree(splittedPath.at(-1), TYPE.FILE);
      path.lastDir.addChild(file);
    });
  },
};

export default Builtin;
