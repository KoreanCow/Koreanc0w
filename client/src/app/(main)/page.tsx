import Image from "next/image";
import Link from 'next/link';
import './main.scss';

export default function Home() {

  return (
    <>
      <div className=' h-40 bg-white' />
      <div className='main-page--container'>
        <p className='main-page--container-text'>KOREAN COW</p>
        <Image
          src="/imgs/IMG_2434.jpeg"
          alt="mainimg"
          draggable={false}
          width={2016}
          height={1512}
          className="main-page--container-main-img"
          priority
        />
      </div>
      <div className='w-full border-b-5 h-5 border-b border-title-color'>
        <div className=' w-1/2 h-5 bg-light-title border-b  border-title-color ' />
      </div>
      <div className='w-full h-400 bg-black'>

      </div>
      <div className='w-full h-1800 bg-lime-300 border-b-2 border-light-title'>

      </div>
      <div className='w-full h-16 mt-9 bg-light-title'>

      </div>
    </>
  );
}
