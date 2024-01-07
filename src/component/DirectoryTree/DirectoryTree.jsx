import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Detail from 'src/component/DirectoryTree/Detail';
import TopBar from 'src/component/Terminal/TopBar';

export default function DirectoryTree() {
  const TreeComponentPos = useSpring({ x: 350, y: 50 });
  const bindTreeComponentPos = useDrag((params) => {
    TreeComponentPos.x.set(params.offset[0]);
    TreeComponentPos.y.set(params.offset[1]);
  });
  return (
    <animated.div
      {...bindTreeComponentPos()}
      className='absolute flex h-5/6 w-3/5 min-w-60 flex-col'
      style={{
        x: TreeComponentPos.x,
        y: TreeComponentPos.y,
      }}
    >
      <TopBar />
      <Detail />
    </animated.div>
  );
}
