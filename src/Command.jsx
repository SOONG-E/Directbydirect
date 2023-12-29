export default function Command() {
  const onEnter = (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      console.log('Enter');
    }
  };
  return (
    <div className='mx-2 flex justify-between'>
      <div className='text-xl font-bold text-green-400'>&gt;</div>
      <input onKeyDown={onEnter} className='bg-black text-white' type='text' />
    </div>
  );
}
