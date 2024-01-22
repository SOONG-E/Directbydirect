import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { useRecoilState } from 'recoil';
import HelpCmdList from 'src/component/Help/HelpCmdList';
import HelpManual from 'src/component/Help/HelpManual';
import { helpOpenState } from 'src/state/NavBar.state';

const Help = ({ helpRef }) => {
  const [targetIndex, setTargetIndex] = useState(null);
  const [isOpened, setIsOpened] = useRecoilState(helpOpenState);
  const [manualIsOpened, setManualIsOpened] = useState(false);
  const position = {
    x: window.innerWidth / 2 - 300,
    y: window.innerHeight / 2 - 300,
  };

  return (
    isOpened && (
      <Draggable defaultPosition={position} bounds='body'>
        <div className='absolute' ref={helpRef}>
          {!manualIsOpened ? (
            <HelpCmdList
              setTargetIndex={setTargetIndex}
              setIsOpened={setIsOpened}
              setManualIsOpened={setManualIsOpened}
            />
          ) : (
            <HelpManual
              targetIndex={targetIndex}
              setManualIsOpened={setManualIsOpened}
            />
          )}
        </div>
      </Draggable>
    )
  );
};

export default Help;
