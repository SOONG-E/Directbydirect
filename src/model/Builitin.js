import { TYPE } from '../constants/Type';
import { ERROR } from '../constants/Message';
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
        if (subTree.getType() === TYPE.FILE) {
          return undefined;
        }
        if (subTree.getType() === TYPE.DIR) {
          tempWd.push(subTree);
        }
      }
    }
    return { leafNode: tempWd.at(-1), lastDir: tempWd.at(-1) };
  },

  cd(arg, { cwd, setCwd }) {
    const new_cwd = [...cwd];
    if (arg.length === 0) {
      return [];
    }
    const path = arg[0].split('/');
    for (const element of path) {
      if (element === '..') {
        if (new_cwd.length != 1) {
          new_cwd.pop();
        }
        continue;
      }
      if (element === '.') continue;

      const subTree = new_cwd.at(-1).getChild().get(element);
      if (subTree === undefined) {
        return [`cd: ${arg[0]}: ${ERROR.ENOENT}`];
      }
      if (subTree.getType() !== TYPE.DIR) {
        return [`cd: ${arg[0]}: ${ERROR.ENOTDIR}`];
      }
      new_cwd.push(subTree);
    }
    setCwd(new_cwd);
    return [];
  },

  cp(arg, { cwd }) {
    if (arg.length !== 2) {
      return [ERROR.USAGE_CP];
    }
    const splittedSrc = arg[0].split('/');
    const src = Builtin.getNode(cwd, splittedSrc);
    if (src === undefined || src.leafNode === undefined) {
      return [`cp: ${arg[0]}: ${ERROR.ENOENT}`];
    }
    if (src.leafNode.getType() === TYPE.DIR) {
      return [`cp: ${arg[0]}: ${ERROR.EISDIR}`];
    }

    const splittedDest = arg[1].split('/');
    const dest = Builtin.getNode(cwd, splittedDest);
    if (dest === undefined) {
      return [`cp: ${arg[1]}: ${ERROR.ENOENT}`];
    }
    if (dest.leafNode === undefined) {
      dest.lastDir.addChild(
        new Tree(splittedDest.at(-1), src.leafNode.getType())
      );
    } else if (dest.leafNode.getType() === TYPE.DIR) {
      dest.leafNode.addChild(src.leafNode);
    } else if (dest.leafNode.getType() === TYPE.FILE) {
      if (src.leafNode.getName() === dest.leafNode.getName()) {
        return [`cp: ${arg[0]} and ${arg[1]} ${ERROR.EIDENTICAL}`];
      }
      dest.lastDir.addChild(src.leafNode, true);
    }
    return [];
  },

  mkdir(arg, { cwd }) {
    const error = [];
    for (const element of arg) {
      const splittedPath = element.split('/');
      const path = Builtin.getNode(cwd, splittedPath);
      if (path === undefined) {
        error.push(`mkdir: ${element}: ${ERROR.ENOENT}`);
        continue;
      }
      const dir = new Tree(splittedPath.at(-1), TYPE.DIR);
      if (!path.lastDir.addChild(dir)) {
        error.push(`mkdir: ${element}: ${ERROR.EEXIST}`);
      }
    }
    return error;
  },

  mv(arg, { cwd }) {
    if (arg.length === 0) {
      return [];
    }
    if (arg.length === 1) {
      return [`mv: ${ERROR.EINVAL}`];
    }
    const splittedLastArg = arg.at(-1).split('/');
    const lastArg = Builtin.getNode(cwd, splittedLastArg);
    if (arg.length > 2) {
      if (lastArg === undefined) {
        return [`mv: ${arg.at(-1)}: ${ERROR.ENOTDIR}`];
      } else if (
        lastArg.leafNode === undefined ||
        lastArg.leafNode.getType() !== TYPE.DIR
      ) {
        return [`mv: ${arg.at(-1)}: ${ERROR.ENOTDIR}`];
      }
    }
    const dummy = [];
    const errorDummy = [];
    let tempTree;
    for (let i = 0; i < arg.length - 1; ++i) {
      const splittedArg = arg[i].split('/');
      tempTree = Builtin.getNode(cwd, splittedArg);
      if (tempTree === undefined || tempTree.leafNode === undefined) {
        errorDummy.push(`mv: ${arg[i]}: ${ERROR.ENOENT}`);
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
    return errorDummy;
  },

  rm(arg, { cwd }) {
    for (let i = 0; i < arg.length; i++) {
      if (arg[i] === '-rf') continue;
      const splittedArg = arg[i].split('/');
      const node = Builtin.getNode(cwd, splittedArg);
      if (node === undefined || node.leafNode === undefined) {
        return [`rm: ${arg[i]}: ${ERROR.ENOENT}`];
      }
      const type = node.leafNode.getType();
      if (i === 0 && type === TYPE.DIR) {
        return [`rm: ${arg[i]}: ${ERROR.EISDIR}`];
      }
      node.lastDir.getChild().delete(splittedArg.at(-1));
    }
    return [];
  },

  touch(arg, { cwd }) {
    for (const element of arg) {
      const splittedPath = element.split('/');
      const path = Builtin.getNode(cwd, splittedPath);
      if (path === undefined || path.leafNode !== undefined) {
        return [];
      }
      const file = new Tree(splittedPath.at(-1), TYPE.FILE);
      path.lastDir.addChild(file);
    }
    return [];
  },
};

export default Builtin;
