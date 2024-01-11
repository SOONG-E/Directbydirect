import OkButton from 'src/component/common/OkButton';

const NextButton = ({ setIsIntroduction }) => {
  const onClickButton = () => {
    setIsIntroduction(false);
  };

  return (
    <button
      className='all-unset m-4 flex h-8 cursor-pointer'
      onClick={onClickButton}
    >
      <OkButton text='next' />
    </button>
  );
};

export default NextButton;
