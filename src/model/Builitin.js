import { useMemo } from 'react';
import { TYPE } from '../constants/Type';
import Tree from './Tree';

const Builtin = {
  getNode(cwd, splittedPath) {
    const tempWd = cwd;

    for (let i = 0; i < splittedPath.length; ++i) {
      if (splittedPath[i] === '..') {
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
        if (subTree.getType() === TYPE.DIR) {
          tempWd.push(subTree);
        }
        if (i === splittedPath.length - 1) {
          return { leafNode: subTree, lastDir: tempWd.at(-1) };
        }
        if (subTree.getType() === TYPE.FILE) {
          console.log('not a directory');
        }
      }
    }
    return { leafNode: tempWd.at(-1), lastDir: tempWd.at(-1) };
  },

  cd(arg, { cwd, setCwd }) {
    const path = arg[0].split('/');

    path.forEach((element) => {
      if (element === '..') {
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

  chmod(arg, props) {
    //보류
  },

  cp(arg, { cwd }) {
    const splittedSrc = arg[0].split('/');
    const src = Builtin.getNode(cwd, splittedSrc);
    if (src === undefined || src.leafNode === undefined) {
      console.log('//error cp: no such file or directory:arg[0]');
      return;
    } else if (src.leafNode.getType() === TYPE.DIR) {
      console.log('//arg[0] is a directory (not copied).');
      return;
    }
    //src.leatNode.type = TYPE.FILE

    const splittedDest = arg[1].split('/');
    const dest = Builtin.getNode(cwd, splittedDest);
    if (dest === undefined) {
      console.log('//error cp: no such file or directory:arg[0]');
      return;
    }
    // console.log(dest.leafNode.getName(), dest.lastDir.getName());
    if (dest.leafNode === undefined || dest.leafNode.getType() === TYPE.DIR) {
      dest.lastDir.addChild(src.leafNode);
    } else if (dest.leafNode.getType() === TYPE.FILE) {
      dest.lastDir.addChild(src.leafNode, true);
    }
  },

  mkdir(arg, { cwd }) {
    arg.forEach((element) => {
      const dir = new Tree(element, TYPE.DIR);
      cwd.at(-1).addChild(dir);
    });
  },

  mv(arg, props) {
    /*
      이름 바꾸는 거

      mv aa bb => aa 를 bb 로 변경 (같은 레벨에 bb란 파일/디렉 이 없을때)
      cc가 dir이면 안으로 들어가고 file이면 cc 가 디렉이 아닙니다.
      mv aa bb cc => aa bb -> cc 안으로 들어간다. 
    */
    /*
      옮기기

      1. mv aa bb => 같은 레벨에 bb 란 디렉이 존재하면 이동
      2. mv cc ./cc/bb  cc가 이동할때 자신을 지나면 에러
              -> mv: rename cc to ./cc/bb/cc: Invalid argument
    */
    // 파일이나 폴더 이동
    // 현재 경로의 파일이나 폴더 삭제
  },

  rm(arg, { cwd, root }) {
    //현재 경로의 파일이나 폴더 삭제
    // 디렉토리 인경우 하위 데이터 도 삭제할지 or
    // 디렉토리인 경우 안된다고 반환할지
    // -rf 옵션 적용하기
    // r = 하위에 있는 것도 삭제
    // f = 묻지 않고 삭제

    // rm -rf file
    // rm -rf ../direc
    // 파일인지 디렉인지 확인 언제 할꺼임???
    for (let i = 0; i < arg.length; i++) {
      const tempArg = arg[i].split('/');
      if (arg[0] !== '-rf') {
        console.log(`${arg[i]}을 삭제 하시겠습니까?? Yes / No`);
        const type = Builtin.getNode(cwd, tempArg);
        if (type !== undefined) {
          type = type.lastDir.get(tempArg.at(-1)).getType();
        }
        if (type === TYPE.DIR) {
          console.log(`${arg[i]} is a directory`);
          return;
        }
      }
      if (arg[0] === '-rf') continue;
      if (tempArg.length !== 1) {
        Builtin.getNode(cwd, tempArg).leafNode.delete(tempArg.at(-1));
      }
      cwd.at(-1).getChild().delete(tempArg.at(-1));
    }
  },

  touch(arg, { cwd }) {
    arg.forEach((element) => {
      const splittedPath = element.split('/');
      const path = Builtin.getNode(cwd, splittedPath);
      if (path !== undefined) {
        const file = new Tree(splittedPath.at(-1), TYPE.FILE);
        path.lastDir.addChild(file);
      }
    });
  },
};

export default Builtin;
