import { atom } from 'recoil';

export const historyState = atom({
  key: 'historyState',
  default: { cmd: [], output: [], error: [] },
});
