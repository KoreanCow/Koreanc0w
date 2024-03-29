import Image from "next/image";
import Link from 'next/link';
import './main.scss';

export default function Home() {

  return (
    <>
      {/* <div className='h-40' /> */}
      <div className='main-page--top-container'>
        <p className='main-page--top-container-text'>KOREAN COW</p>
        <Image
          src="/imgs/IMG_2434.jpeg"
          alt="mainimg"
          draggable={false}
          width={2016}
          height={1512}
          className="main-page--top-container-main-img"
          priority
        />
      </div>
      <div className='main-page--top-container-classfication'>
        <div className='main-page--top-container-classfication-progress' />
      </div>
      <div className='main-page--profile-container'>
        {/* <div className='w-91 flex justify-between items-center'> */}
        <div className='main-page--profile-media-query-box'>
          <div className='main-page--profile-summary'>
            <p>프로그래머 프로필</p>
            <span>부가설명 1</span>
            <span>부가설명 2</span>
          </div>
          <Image
            src='/imgs/profile.png'
            alt='profile img'
            draggable={false}
            width={240}
            height={240}
            className='main-page--profile-img'
            priority
          />
          {/* <div className='main-page--profile-img'>

          </div> */}
        </div>
        <div>

        </div>
      </div>
      <div className='main-page--post'>

      </div>
      <div className='main-page--bottom-container'>

      </div>
    </>
  );
}
