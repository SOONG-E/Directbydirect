import TopLeftSide from 'src/component/NavBar/TopLeftSide';
import TopRightSide from 'src/component/NavBar/TopRightSide';

const NavBar = () => {
  return (
    <div className='relative w-full h-[32px] backdrop-blur-md'>
      <div className='w-full h-[32px] opacity-30 bg-neutral-300 drop-shadow'>
      </div>
        <div className='absolute top-0 flex w-full h-full justify-between px-5'>
          <TopLeftSide />
          <TopRightSide />
        </div>
    </div>
  );
};

export default NavBar;
