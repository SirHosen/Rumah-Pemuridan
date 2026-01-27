'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105">
          <Image
            src="/logo/logo.png"
            alt="Rumah Pemuridan"
            width={40}
            height={40}
            className="drop-shadow-md sm:w-[50px] sm:h-[50px]"
          />
          <span className={`font-cinzel text-base sm:text-xl font-bold ${scrolled ? 'text-darkBrown-900' : 'text-cream-50 text-shadow'}`}>
            Rumah Pemuridan
          </span>
        </Link>

        <ul className="flex gap-3 sm:gap-6 md:gap-8">
          <li>
            <Link
              href="/"
              className={`font-montserrat text-sm sm:text-base font-medium transition-all hover:scale-110 ${
                scrolled
                  ? 'text-darkBrown-900 hover:text-gold-600'
                  : 'text-cream-50 text-shadow hover:text-gold-300'
              }`}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/tentang"
              className={`font-montserrat text-sm sm:text-base font-medium transition-all hover:scale-110 ${
                scrolled
                  ? 'text-darkBrown-900 hover:text-gold-600'
                  : 'text-cream-50 text-shadow hover:text-gold-300'
              }`}
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className={`font-montserrat text-sm sm:text-base font-medium transition-all hover:scale-110 ${
                scrolled
                  ? 'text-darkBrown-900 hover:text-gold-600'
                  : 'text-cream-50 text-shadow hover:text-gold-300'
              }`}
            >
              Berita
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
