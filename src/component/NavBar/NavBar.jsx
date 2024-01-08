import TopLeftSide from 'src/component/NavBar/TopLeftSide';
import TopRightSide from 'src/component/NavBar/TopRightSide';

const NavBar = ({ navBarRef }) => {
  return (
    <div className='h-[32px] w-full shadow-lg backdrop-blur-md'>
      <div className='h-[32px] w-full bg-[#d2d2d2] bg-opacity-20 drop-shadow'>
        <div className='flex h-full w-full justify-between px-5'>
          <TopLeftSide navBarRef={navBarRef} />
          <TopRightSide />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
