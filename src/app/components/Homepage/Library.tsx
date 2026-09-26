"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { LibraryItem } from "@/Types/type";

const Library = () => {
  const [data, setData] = useState<LibraryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10000);

    const loadLibrary = async () => {
      try {
        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog",
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`Library API returned ${response.status}`);
        }

        const result: unknown = await response.json();

        if (!Array.isArray(result)) {
          throw new Error("Library API returned an invalid response");
        }

        setData(result as LibraryItem[]);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Failed to load the workout library:", error);
          setHasError(true);
        }
      } finally {
        window.clearTimeout(timeout);
        setIsLoading(false);
      }
    };

    loadLibrary();

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="w-10/12 mx-auto py-8">

      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-white uppercase tracking-wider">
          THE LIBRARY
        </h2>

        <p className="text-sm text-zinc-400 mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {isLoading ? (
        <div className="rounded-2xl border border-[#292b35] bg-[#15161d] p-6">
          <p className="text-sm text-zinc-400">Loading workouts...</p>
        </div>
      ) : hasError || data.length === 0 ? (
        <div className="rounded-2xl border border-[#292b35] bg-[#15161d] p-6">
          <p className="text-sm text-zinc-400">
            The workout library is temporarily unavailable. Please try again later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
          <div
            key={item.id}
            className="bg-[#15161d] border border-[#292b35] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-lime-400 hover:shadow-lg hover:shadow-lime-400/10"
          >

            <div className="relative w-full h-48 sm:h-52">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">

              <div className="flex flex-wrap gap-2 mb-3">
                {item.muscleGroups.map((muscle, index) => (
                  <span
                    key={index}
                    className="bg-lime-400 text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-extrabold text-white uppercase tracking-wide">
                {item.name}
              </h3>

              <p className="text-xs text-zinc-400 mt-1">
                {item.equipment}
              </p>

              <div className="border-t border-zinc-800 my-4"></div>

              <div className="flex items-center gap-4 text-xs text-zinc-400 align-sub">

                <div className="flex items-center gap-1.5">
                  <span>◷</span>
                  <span>{item.duration} min</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span>♨</span>
                  <span>{item.caloriesBurned} kcal</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span>☆</span>
                  <span>{item.rating}</span>
                </div>

              </div>

            </div>
          </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Library;