import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className='h-36 flex flex-col items-center text-title-color font-pretendard '>
      <div className='w-11/12 h-28 flex items-center justify-between'>
        <Link className='font-press-start font-normal text-xl ' href='/'>
          KOREANCOW
        </Link>
        <span className='font-bold text-sm'>log out</span>
      </div>
      <div className=' text-base font-pretendard flex justify-center w-dvw border-y-2 border-title-color'>
        <div className='font-bold w-11/12 h-12 flex justify-between items-center'>
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
  )
}

export default Navigation
