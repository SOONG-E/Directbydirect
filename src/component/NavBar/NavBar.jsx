import TopLeftSide from 'src/component/NavBar/TopLeftSide';
import TopRightSide from 'src/component/NavBar/TopRightSide';

const NavBar = () => {
  return (
    <div className='w-full h-[32px] backdrop-blur-md'>
      <div className='w-full h-[32px] opacity-30 bg-neutral-300 drop-shadow'>
        <div className='flex h-full justify-between mx-5'>
          <TopLeftSide />
          <TopRightSide />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
