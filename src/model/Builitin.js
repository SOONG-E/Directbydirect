import { useMemo } from 'react';
import { TYPE } from '../constants/Type';
import Tree from './Tree';

const Builtin = {
  cd(arg, { pwd, setPwd }) {
    const path = arg[0].split('/');

    path.forEach((element) => {
      if (element === '..') {
        pwd.pop();
      } else if (element !== '.') {
        const subTree = pwd.at(-1).getChild().get(element);
        if (subTree === undefined) {
          //error cd: no such file or directory:arg[0]
        } else {
          setPwd([...pwd, subTree]);
        }
      }
    });
  },

  chmod(arg, props) {
    //보류
  },

  cp(arg, props) {
    // cp hello ./a/b 형식이이거 맞아여??  감사합니다.
    //밎이여 근데 첫번째 arg도 경로일 수도 있어요
    //두번째 arg의 마지막(/다음)과 같은 디렉토리가 존재하면 디렉토리 안에 같은 이름으로 파일생성
    // 존재하지않으면 앞 디렉토리안에 새로운 이름으로 생성
    const src = arg[0].split('/');
    const dest = arg[1].split('/');

    // path.forEach((element) => {

    // });
  },

  mkdir(arg, { pwd }) {
    arg.forEach((element) => {
      const dir = new Tree(element, TYPE.DIR);
      pwd.at(-1).addChild(new Tree(element, TYPE.DIR));
    });
  },

  mv(arg, props) {
    // 이름 바꾸는 거면 어떠케???
    // 파일이나 폴더 이동
    // 현재 경로의 파일이나 폴더 삭제
  },

  rm(arg, props) {
    //현재 경로의 파일이나 폴더 삭제
  },

  touch(arg, { pwd }) {
    arg.forEach((element) => {
      const file = new Tree(element, TYPE.FILE);
      pwd.at(-1).addChild(file);
    });
  },
};

export default Builtin;

/*
    chmod [OPTION] [MODE] [FILE]
      OPTION
        -v        : 모든 파일에 대해 모드가 적용되는 진단(diagnostic) 메시지 출력.
        -f        : 에러 메시지 출력하지 않음.
        -c        : 기존 파일 모드가 변경되는 경우만 진단(diagnostic) 메시지 출력.
        -R        : 지정한 모드를 파일과 디렉토리에 대해 재귀적으로(recursively) 적용.
      MODE
        파일에 적용할 모드(mode) 문자열 조합.
          u,g,o,a : 소유자(u), 그룹(g), 그 외 사용자(o), 모든 사용자(a) 지정.
          +,-,=   : 현재 모드에 권한 추가(+), 현재 모드에서 권한 제거(-), 현재 모드로 권한 지정(=)
          r,w,x   : 읽기 권한(r), 쓰기 권한(w), 실행 권한(x)
          X       : "디렉토리" 또는 "실행 권한(x)이 있는 파일"에 실행 권한(x) 적용.
          s       : 실행 시 사용자 또는 그룹 ID 지정(s). "setuid", "setgid".
          t       : 공유모드에서의 제한된 삭제 플래그를 나타내는 sticky(t) bit.
          0~7     : 8진수(octet) 형식 모드 설정 값.
*/
