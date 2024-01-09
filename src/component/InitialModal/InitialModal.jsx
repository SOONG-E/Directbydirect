import InputBox from 'src/component/InitialModal/InputBox/InputBox';
import WelcomeModal from 'src/component/InitialModal/WelcomeModal/WelcomeModal';

const InitialModal = () => {
  const [isIntroduction, setIsIntroduction] = useState(true);

  return isIntroduction ? <WelcomeModal /> : <InputBox />;
};

export default InitialModal;
