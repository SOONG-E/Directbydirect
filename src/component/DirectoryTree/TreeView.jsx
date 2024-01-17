import File from 'src/component/DirectoryTree/File';

const TreeView = ({ tree }) => {
  const child = tree.getChild();

  return (
    <div className='flex-1 rounded-b-md bg-[#efefef] bg-opacity-90'>
      <File tree={tree} />
      {child &&
        [...child.values()].map((subtree, index) => (
          <TreeView key={index} tree={subtree} />
        ))}
    </div>
  );
};

export default TreeView;
