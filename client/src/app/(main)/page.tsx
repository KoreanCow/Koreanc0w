import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  return (
    <div className='relative w-screen h-600'>
      <p className='font-lexendZetta text-8xl text-title-color z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>
        KOREAN COW
      </p>
      <Image
        src="/imgs/IMG_2434.jpeg"
        alt="mainimg"
        draggable={false}
        width={2016}
        height={1512}
        className="w-full h-full z-0 object-cover"
        priority
      />
      <div className='w-full border-b-5 h-5 border-b border-title-color'>
        <div className=' w-1/2 h-5 bg-light-title border-b  border-title-color ' />
      </div>
      <div className='w-full h-400 bg-black'>

      </div>
      <div className='w-full h-1800 bg-lime-300 border-b-2 border-light-title'>

      </div>
      <div className='w-full h-16 mt-9 bg-light-title'>

      </div>
    </div>
  );
}
