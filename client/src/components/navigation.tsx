import Link from 'next/link';

const Navigation = () => {
  return (
    <div className='bg-white h-38 flex flex-col items-center text-title-color font-hard opacity-95 fixed w-full top-0 z-20'>
      <div className='w-11/12 h-28 flex items-center justify-between'>
        <Link className='font-press-start font-normal text-xl' href='/'>
          KOREANCOW
        </Link>
        <span className='font-bold text-sm'>log out</span>
      </div>
      <div className=' text-base font-pretendard flex justify-center w-full border-y-2 border-title-color'>
        <div className='font-bold w-11/12 h-10 flex justify-between items-center pt-1'>
          <span>
            Web blog
          </span>
          <div className='w-64 flex justify-between'>
            <Link className='custom-link' href='/blog'>Blog</Link>
            <Link className='custom-link' href='/about'>About</Link>
            <Link className='custom-link' href='/my-page'>My Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
