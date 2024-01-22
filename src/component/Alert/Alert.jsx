import TopBar from 'src/component/common/TopBar';

const Alert = ({ text }) => {
  return (
    <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[#d9d9d9]/[50%]'>
      <div className='flex min-h-80 min-w-80 flex-col rounded-md bg-white bg-opacity-80 shadow-lg backdrop-blur-lg focus:outline-none'>
        <TopBar text={'alert'}></TopBar>
        <div className='flex flex-1 items-center justify-center'>{text}</div>
      </div>
    </div>
  );
};

export default Alert;
