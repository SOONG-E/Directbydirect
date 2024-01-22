import { TYPE } from 'src/constant/Type';

const File = ({ tree }) => {
  const type = tree.getType();

  return (
    <div
      className='flex items-center gap-x-2'
      style={{ paddingLeft: `${tree.getDepth() * 15}px` }}
    >
      {/* {type === TYPE.DIR && '🔻'} */}
      <img src={`ic_file_${type}.png`} alt='file icon' />
      <p>{tree.getName()}</p>
    </div>
  );
};

export default File;
