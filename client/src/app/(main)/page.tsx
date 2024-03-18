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
    </div>
  );
}
