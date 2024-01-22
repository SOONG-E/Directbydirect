import { atom } from 'recoil';
import { TYPE } from 'src/constant/Type';
import Tree from 'src/util/Tree';

export const rootState = atom({
  key: 'rootState',
  default: new Tree('', TYPE.DIR),
});
