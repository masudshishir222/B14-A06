import React from 'react';
import Image from 'next/image';
import type { LibraryItem } from '@/Types/type';



const getLibrary = async (): Promise<LibraryItem[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
}

const Library = async () => {
  const data: LibraryItem[] = await getLibrary();

  return (
    <section className="w-11/12 mx-auto bg-black text-white px-4 lg:px-8 py-8">

      <div className="mb-8">
        <h2 className="text-xl lg:text-2xl font-extrabold uppercase tracking-wider text-white">
          THE LIBRARY
        </h2>
        <p className="text-xs lg:text-sm text-zinc-400 mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((libraryItem) => (
          <div
            key={libraryItem.id}
            className="bg-[#12141c] border border-zinc-800/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-md hover:border-zinc-700 transition-all duration-200"
          >

            <div className="relative w-full h-48 sm:h-52 bg-zinc-900">
              <Image
                src={libraryItem.image}
                alt={libraryItem.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col gap-3">

              <div className="flex flex-wrap gap-1.5">
                {libraryItem.muscleGroups.map((muscle: string, index: number) => (
                  <span
                    key={index}
                    className="bg-lime-400 text-black text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-base lg:text-lg font-bold text-white uppercase tracking-tight">
                  {libraryItem.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5 truncate">
                  {libraryItem.equipment}
                </p>
              </div>

              <div className="border-t border-zinc-800/80 my-1"></div>

              <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">

                <div className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{libraryItem.duration} min</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{libraryItem.caloriesBurned} kcal</span>
                </div>

                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-500 fill-zinc-500" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <span>{libraryItem.rating}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Library;