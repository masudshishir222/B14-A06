"use client";

import Image from 'next/image';
import React, { useContext } from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LibraryContext } from '@/Context/LibraryContext';

const Navbar = () => {
  const pathname = usePathname();
  const context = useContext(LibraryContext);
  const planCount = context?.workout.length ?? 0;
  const savedCount = context?.wishlist.length ?? 0;
  const isWorkoutsActive = pathname.startsWith('/Workouts');
  const isPlanActive = pathname === '/listedWorkout';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-neutral shadow-sm">
      <div className="navbar w-10/12 mx-auto text-neutral-content px-0">

      <div className="navbar-start">

        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-zinc-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-[#12141c] rounded-box w-52 border border-zinc-800">
            <li><Link href="/Workouts" aria-current={isWorkoutsActive ? "page" : undefined} className={`font-semibold ${isWorkoutsActive ? "text-lime-400" : "hover:text-lime-400"}`}>Workouts</Link></li>
            <li><Link href="/listedWorkout?tab=plan" aria-current={isPlanActive ? "page" : undefined} className={isPlanActive ? "text-lime-400" : "text-zinc-300 hover:text-lime-400"}>My Plan</Link></li>
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-xl normal-case flex items-center gap-2 p-0 hover:bg-transparent">
          <div className="relative w-8 h-8 flex items-center justify-center"> 
            <Image src={logo} alt="Fitlog Logo" fill className="object-contain" />
          </div>
          <span className="font-extrabold tracking-wider text-white">FITLOG</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 items-center">
          <li>
            <Link href="/Workouts" aria-current={isWorkoutsActive ? "page" : undefined} className={`${isWorkoutsActive ? "text-lime-400 bg-accent-content" : "text-zinc-400 hover:text-lime-500 hover:bg-accent-content"} font-semibold rounded-full px-4 py-1.5`}>
              Workouts
            </Link>
          </li>
          <li>
            <Link href="/listedWorkout?tab=plan" aria-current={isPlanActive ? "page" : undefined} className={`${isPlanActive ? "text-lime-400 bg-accent-content" : "text-zinc-400 hover:text-lime-500 hover:bg-accent-content"} rounded-full font-medium`}>
              My Plan
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3 lg:gap-4 text-xs lg:text-sm font-medium">
        <div className="flex items-center gap-1.5 lg:gap-2 text-zinc-300">
          <Link href="/listedWorkout?tab=plan" className="hover:text-lime-400 font-semibold">Plan</Link>
          <span className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold text-[11px] lg:text-xs">
            {planCount}
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 lg:gap-2 text-zinc-300">
          <Link href="/listedWorkout?tab=saved" className="hover:text-lime-400 font-semibold">Saved</Link>
          <span className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 flex items-center justify-center font-bold text-[11px] lg:text-xs">
            {savedCount}
          </span>
        </div>
      </div>

      </div>
    </header>
  );
};

export default Navbar;
