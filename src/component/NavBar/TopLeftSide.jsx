import { useRecoilState } from 'recoil';
import { navBarState } from 'src/state/NavBar.state';

const TopLeftSide = ({ navBarRef }) => {
  const [componentClicked, setComponentClicked] = useRecoilState(navBarState);

  const onClickedItem = (key) => {
    setComponentClicked((pre) =>
      pre.map((item) => {
        if (item.key === key) return { ...item, value: !item.value };
        return { ...item, value: false };
      })
    );
  };

  const onClickImg = () => {
    window.location.reload();
  };

  return (
    <div
      className='relative flex items-center text-sm font-bold text-midblack'
      ref={navBarRef}
    >
      <img
        src='ic_logo.png'
        className='mr-4 w-6 cursor-pointer'
        onClick={onClickImg}
      />
      {componentClicked.map((item, id) => (
        <div key={id}>
          <button
            className='top-bar-item m-1'
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
