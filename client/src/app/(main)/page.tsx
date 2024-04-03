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
          src='/imgs/blocks-two.png'
          alt='design block'
          draggable={false}
          width={45}
          height={35}
          className='main-page--top-container-block'
        />
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
        <div className='main-page--profile-media-query-box'>
          <div className='main-page--profile-summary'>
            <p>프로그래머 프로필</p>
            <span>부가설명 1</span>
            <span>부가설명 2</span>
            <Image
              src='/imgs/blocks-two.png'
              alt='design block'
              draggable={false}
              width={45}
              height={35}
              className='main-page--profile-block'
            />
          </div>
          <Image
            src='/imgs/blocks-two.png'
            alt='design block'
            draggable={false}
            width={65}
            height={35}
            className='main-page--profile-block2'
          />
          <Image
            src='/imgs/profile.png'
            alt='profile img'
            draggable={false}
            width={240}
            height={240}
            className='main-page--profile-img'
            priority
          />
        </div>
      </div>
      <div className='main-page--post'>
        <p className=' w-11/12 font-pretendard text-5xl ml-3 font-bold text-title-color'>블로그 타임 라인</p>
        <div className='main-page--post-container'>
          <div className='main-page--post-summary'>
            <p>한우혁의 2023.12.12 여행기</p>
            <span>어쩌꾸쩌쩌꾸 하나둘세 kadossadokw</span>
          </div>
          <Image
            src='/imgs/IMG_2428.jpeg'
            alt='post img'
            draggable={false}
            height={400}
            width={400}
            className='main-page--post-picture'
            priority
          />
        </div>
        <div className='main-page--post-container'>
          <Image
            src='/imgs/IMG_2428.jpeg'
            alt='post img'
            draggable={false}
            height={400}
            width={400}
            className='main-page--post-picture'
            priority
          />
          <div className='main-page--post-summary'>
            <p>한우혁의 2023.12.12 여행기</p>
            <span>어쩌꾸쩌쩌꾸 하나둘세 kadossadokw</span>
          </div>
        </div>
        <div className='main-page--post-list'>
          <p>
            게시글 페이지  1 2 3 4
          </p>
        </div>
      </div>
      <div className='main-page--bottom-container'>

      </div>
    </>
  );
}
