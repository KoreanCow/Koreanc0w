'use client';
import { useEffect, useState } from 'react';
import './navigation.scss';
import Link from 'next/link';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`navigation-bar--container ${scrolled ? 'navigation-bar--container-scrolled' : ''}`}>
      <div className='navigation-bar--top-container'>
        <Link className='navigation-bar--top-container-title' href='/'>
          KOREANCOW
        </Link>
        <span className='navigation-bar--top-container-login'>log out</span>
      </div>
      <div className='navigation-bar--bottom-container'>
        <div className='navigation-bar--bottom-container-actionbox'>
          <span>
            Web blog
          </span>
          <div className='navigation-bar--bottom-container-linkbox'>
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
