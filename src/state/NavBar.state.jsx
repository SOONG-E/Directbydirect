import { atom, selector } from 'recoil';
import GitButtons from 'src/component/NavBar/GitButtons';
import Introduction from 'src/component/NavBar/Introduction';

export const navBarState = atom({
  key: 'navBarState',
  default: [
    {
      key: 'title',
      value: false,
      title: 'DirectByDirect',
      child: <Introduction />,
    },
    { key: 'help', value: false, title: 'help', child: null },
    { key: 'gits', value: false, title: 'Gits', child: <GitButtons /> },
  ],
});

export const helpOpenState = selector({
  key: 'helpOpenState',
  get: ({ get }) => {
    const navBar = get(navBarState);

    return navBar.find((item) => item.key === 'help').value;
  },
  set: ({ set }, newValue) => {
    const setNavBar = set(navBarState);

    setNavBar((pre) =>
      pre.map((item) => {
        if (item.key === 'help') return { ...item, value: newValue };
        return { ...item, value: false };
      })
    );
  },
});
