import File from 'src/component/DirectoryTree/File';

const TreeView = ({ tree }) => {
  const child = tree.getChild();

  return (
    <div className='flex-1 rounded-b-md bg-[#efefef] bg-opacity-90'>
      {tree.getParent() === null && (
        <div className='flex items-center gap-1'>
          <File tree={tree} />
        </div>
      )}
      {/* {tree.forEach((child) => (
        <div>
          <IconPick tree={tree} />
          {child.child.size !== 0 && <Detail tree={child} />}
        </div>
      ))} */}
    </div>
  );
};

export default TreeView;
