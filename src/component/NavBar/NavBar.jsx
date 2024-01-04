import TopLeftSide from 'src/component/NavBar/TopLeftSide';
import TopRightSide from 'src/component/NavBar/TopRightSide';

const NavBar = () => {
  return (
    <div className='relative w-full h-[32px] backdrop-blur-md shadow-lg'>
      <div className='w-full h-[32px] opacity-20 bg-[#d2d2d2] drop-shadow'>
      </div>
        <div className='absolute top-0 flex w-full h-full justify-between px-5'>
          <TopLeftSide />
          <TopRightSide />
        </div>
    </div>
  );
};

export default NavBar;
