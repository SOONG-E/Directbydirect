import { TYPE } from 'src/constant/Type';

const File = ({ tree }) => {
  const type = tree.getType();

  return (
    <div className={`flex items-center gap-x-2 pl-${tree.getDepth() * 10}`}>
      {type === TYPE.DIR && '🔻'}
      <img src={`ic_file_${type}.png`} alt='file icon' />
      <p>{tree.getName()}</p>
    </div>
  );
};

export default File;
