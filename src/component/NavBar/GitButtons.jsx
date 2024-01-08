const GitButton = () => {
  const developers = [
    {
      nickname: 'oio337a',
      url: 'https://github.com/oio337a',
      imageUrl: 'https://avatars.githubusercontent.com/u/75519420?v=4',
    },
    {
      nickname: 'jjongs2',
      url: 'https://github.com/jjongs2',
      imageUrl: 'https://avatars.githubusercontent.com/u/96157612?v=4',
    },
    {
      nickname: 'soong-e',
      url: 'https://github.com/SOONG-E',
      imageUrl: 'https://avatars.githubusercontent.com/u/52056062?v=4',
    },
  ];

  return (
    <div className='nav-bar-box left-44'>
      {developers.map((developer, id) => {
        return (
          <a
            target='_blank'
            href={developer.url}
            className='all-unset flex cursor-pointer py-0.5'
            key={id}
          >
            <div className='mr-2 h-6 w-6 overflow-hidden rounded-full'>
              <img className='bg-cover' src={developer.imageUrl}></img>
            </div>
            <div className='text-nowrap text-left'>{developer.nickname}</div>
          </a>
        );
      })}
    </div>
  );
};

export default GitButton;
