const TopLeftSide = () => {
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
      <button className='top-bar-item'>DirectByDirect</button>
      <button className='top-bar-item ml-4'>Helps</button>
      <button className='top-bar-item ml-4' onClick={onClickedGits}>
        Gits
      </button>
    </div>
  );
};

export default TopLeftSide;
