'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Image
          src="/images/background.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-burgundy-900/60 via-burgundy-800/40 to-cream-50/90" />
      
      {/* Additional Warm Glow */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-gold-200/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] relative">
            <Image
              src="/logo/logo.png"
              alt="Rumah Pemuridan"
              fill
              className="drop-shadow-2xl object-contain"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="mb-6 font-cinzel text-5xl font-bold text-cream-50 text-shadow-lg md:text-7xl lg:text-8xl"
        >
          Rumah Pemuridan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          className="mb-8 max-w-2xl font-playfair text-xl text-cream-100 text-shadow md:text-2xl"
        >
          Bertumbuh Bersama dalam Kasih Kristus
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: 'easeOut' }}
          className="flex gap-4"
        >
          <a
            href="#about"
            className="rounded-lg bg-gold-500 px-8 py-3 font-montserrat font-semibold text-darkBrown-900 shadow-lg transition-all hover:bg-gold-400 hover:shadow-xl hover:scale-105"
          >
            Tentang Kami
          </a>
          <a
            href="/news"
            className="rounded-lg border-2 border-cream-50 bg-transparent px-8 py-3 font-montserrat font-semibold text-cream-50 shadow-lg transition-all hover:bg-cream-50/10 hover:shadow-xl hover:scale-105"
          >
            Berita Terkini
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-cream-50"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Silhouettes - Optional decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-t from-darkBrown-900/20 to-transparent" />
    </div>
  );
}
