import File from 'src/component/DirectoryTree/File';

const TreeView = ({ tree }) => {
  const child = tree.getChild();

  return (
    <div className='space-y-1'>
      <File tree={tree} />
      {child &&
        [...child.values()].map((subtree, index) => (
          <TreeView key={index} tree={subtree} />
        ))}
    </div>
  );
};

export default TreeView;
