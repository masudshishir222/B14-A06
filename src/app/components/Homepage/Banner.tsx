import React from 'react';
import Image from 'next/image';
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto bg-[#12141c] border border-zinc-800/80 rounded-2xl lg:rounded-3xl grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 sm:px-6 py-8 sm:py-12 lg:px-16 lg:py-16 mt-8 mb-4 lg:mt-10 lg:mb-6">
      
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
        <span className="text-lime-400 font-bold text-xs tracking-widest uppercase">
          WORKOUT LIBRARY
        </span>
        
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight lg:leading-none">
          TRAIN WITH INTENT. LOG <br/> EVERY SET.
        </h1>
        
        <p className="text-zinc-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-lg">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into  today's plan, and watch the week's work add up.
        </p>
        
        <button className="mt-2 bg-lime-400 hover:bg-lime-500 text-black font-bold px-6 py-3 rounded-md text-sm transition-colors duration-200 w-full sm:w-auto">
          BROWSE WORKOUTS
        </button>
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-70 sm:max-w-md h-64 sm:h-72 lg:h-96">
          <Image 
            src={bannerImage} 
            alt="Workout Banner Image" 
            fill 
            className="object-contain" 
            priority
          />
        </div>
      </div>

    </div>
  );
};

export default Banner;