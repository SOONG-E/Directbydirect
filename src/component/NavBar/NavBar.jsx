import TopLeftSide from 'src/component/NavBar/TopLeftSide';
import TopRightSide from 'src/component/NavBar/TopRightSide';

const NavBar = () => {
  return (
    <div className='relative h-[32px] w-full shadow-lg backdrop-blur-md'>
      <div className='h-[32px] w-full bg-[#d2d2d2] opacity-20 drop-shadow'></div>
      <div className='absolute top-0 flex h-full w-full justify-between px-5'>
        <TopLeftSide />
        <TopRightSide />
      </div>
    </div>
  );
};

export default NavBar;
