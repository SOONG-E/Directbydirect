import { atom } from 'recoil';
import GitButtons from 'src/component/NavBar/GitButtons';
import Introduction from 'src/component/NavBar/Introduction';

export const navBarState = atom({
  key: 'navBarState',
  default: [
    { key: 'gits', value: false, title: 'Gits', child: <Introduction /> },
    { key: 'help', value: false, title: 'help', child: null },
    {
      key: 'title',
      value: false,
      title: 'DirectByDirect',
      child: <GitButtons />,
    },
  ],
});
