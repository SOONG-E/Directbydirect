import File from 'src/component/DirectoryTree/File';

const TreeView = ({ tree }) => {
  return (
    <div className='flex-1 rounded-b-md bg-[#efefef] bg-opacity-90'>
      {tree.getParent() === null && (
        <div className='flex items-center gap-1'>
          <File tree={tree} />
        </div>
      )}
      {tree.getChild().forEach((subtree) => (
        <TreeView tree={subtree} />
      ))}
    </div>
  );
};

export default TreeView;
