import File from 'src/component/DirectoryTree/File';

const TreeView = ({ tree }) => {
  const child = tree.getChild();

  return (
    <div className='flex-1 rounded-b-md bg-[#efefef] bg-opacity-90'>
      <div className='flex items-center gap-1'>
        <File tree={tree} />
      </div>
      {child &&
        [...child.values()].map((subtree, index) => (
          <TreeView key={index} tree={subtree} />
        ))}
    </div>
  );
};

export default TreeView;
