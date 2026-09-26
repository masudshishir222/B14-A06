import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="mt-12 w-full bg-[#090a0f] border-t border-[#20212a]">

      <div className="w-10/12 mx-auto py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xl normal-case">
          <div className="relative w-8 h-8 flex items-center justify-center"> 
            <Image src={logo} alt="Fitlog Logo" fill className="object-contain" />
          </div>
          <span className="font-extrabold tracking-wider text-white">FITLOG</span>
        </div>

        <p className="text-xs text-zinc-500 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;