import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content shadow-sm px-4">

  <div className="navbar-start">
    <a className="btn btn-ghost text-xl normal-case flex items-center gap-2">

      <div className="w-8 h-8 flex items-center justify-center"> 
        <Image src={logo} alt="Fitlog Logo" className="object-contain" />
      </div>
      <span className="font-extrabold tracking-wider text-white">FITLOG</span>
    </a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2 items-center">
      <li>
        <a className="bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-500 px-4 py-1.5">
          Workouts
        </a>
      </li>
      <li>
        <a className="text-zinc-400 hover:text-white rounded-full font-medium">
          My Plan
        </a>
      </li>
    </ul>
  </div>

  <div className="navbar-end gap-4 text-sm font-medium">
    <div className="flex items-center gap-2 text-zinc-300">
      <span>Plan</span>
      <span className="w-7 h-7 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold text-xs">
        0
      </span>
    </div>
    
    <div className="flex items-center gap-2 text-zinc-300">
      <span>Saved</span>
      <span className="w-7 h-7 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 flex items-center justify-center font-bold text-xs">
        0
      </span>
    </div>
  </div>
</div>
  );
};

export default Navbar;