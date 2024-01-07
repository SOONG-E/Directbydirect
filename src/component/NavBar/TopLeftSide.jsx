import { useState } from 'react';
import GitButtons from 'src/component/NavBar/GitButtons';
import Introduction from 'src/component/NavBar/Introduction';

const TopLeftSide = () => {
  const [gitsClicked, setGitsClicked] = useState(false);
  const [titleClicked, setTitleClicked] = useState(false);

  const onClickedGits = () => {
    setGitsClicked(true);
  };

  const onClickedTitle = () => {
    setTitleClicked(true);
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
      <button className='top-bar-item' onClick={onClickedTitle}>
        DirectByDirect
      </button>
      {titleClicked && <Introduction />}
      <button className='top-bar-item ml-4'>Helps</button>
      <button className='top-bar-item ml-4' onClick={onClickedGits}>
        Gits
      </button>
      {gitsClicked && <GitButtons />}
    </div>
  );
};

export default TopLeftSide;
