import { useState } from 'react';
import GitButtons from 'src/component/NavBar/GitButtons';
import Introduction from 'src/component/NavBar/Introduction';

const TopLeftSide = () => {
  const [componentClicked, setComponentClicked] = useState([
    { key: 'gits', value: false, title: 'Gits', child: <Introduction /> },
    { key: 'help', value: false, title: 'help', child: null },
    {
      key: 'title',
      value: false,
      title: 'DirectByDirect',
      child: <GitButtons />,
    },
  ]);

  const onClickedItem = (key) => {
    setComponentClicked((pre) =>
      pre.map((item) => {
        if (item.key === key) return { ...item, value: true };
        return { ...item, value: false };
      })
    );
  };

  const onClickImg = () => {
    window.location.reload();
  };

  return (
    <div className='relative flex items-center text-sm font-bold text-midblack'>
      <img
        src='MiniLogo.png'
        className='mr-4 w-6 cursor-pointer'
        onClick={onClickImg}
      />
      {componentClicked.map((item, id) => (
        <div key={id}>
          <button
            className='top-bar-item m-2'
            onClick={() => onClickedItem(item.key)}
          >
            {item.title}
          </button>
          {item.value && item.child}
        </div>
      ))}
    </div>
  );
};

export default TopLeftSide;
