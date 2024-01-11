import OkButton from 'src/component/common/OkButton';

const NextButton = ({ setIsIntroduction }) => {
  const onClickButton = () => {
    setIsIntroduction(false);
  };

  return (
    <div className='all-unset m-4 flex h-8'>
      <OkButton onClick={onClickButton} text='next' />
    </div>
  );
};

export default NextButton;
