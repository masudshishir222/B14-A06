import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-neutral shadow-sm">
      <div className="navbar w-10/12 mx-auto text-neutral-content px-0">

      <div className="navbar-start">

        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-zinc-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-[#12141c] rounded-box w-52 border border-zinc-800">
            <li><a className="hover:text-lime-400 font-semibold">Workouts</a></li>
            <li><a className="text-zinc-300">My Plan</a></li>
          </ul>
        </div>

        <a className="btn btn-ghost text-xl normal-case flex items-center gap-2 p-0 hover:bg-transparent">
          <div className="relative w-8 h-8 flex items-center justify-center"> 
            <Image src={logo} alt="Fitlog Logo" fill className="object-contain" />
          </div>
          <span className="font-extrabold tracking-wider text-white">FITLOG</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 items-center">
          <li>
            <a className="text-zinc-400 font-semibold rounded-full hover:text-lime-500 hover:bg-accent-content px-4 py-1.5">
              Workouts
            </a>
          </li>
          <li>
            <a className="text-zinc-400 hover:text-lime-500 rounded-full font-medium hover:bg-accent-content">
              My Plan
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3 lg:gap-4 text-xs lg:text-sm font-medium">
        <div className="flex items-center gap-1.5 lg:gap-2 text-zinc-300">
          <button className="hover:text-lime-400 font-semibold">Plan</button>
          <span className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold text-[11px] lg:text-xs">
            0
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 lg:gap-2 text-zinc-300">
          <button className="hover:text-lime-400 font-semibold">Saved</button>
          <span className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 flex items-center justify-center font-bold text-[11px] lg:text-xs">
            0
          </span>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Navbar;