import Image from "next/image";
import Link from "next/link";
import type { LibraryItem } from "@/Types/type";

interface LibraryProps {
  initialData: LibraryItem[];
}

const Library = ({ initialData }: LibraryProps) => (
  <section id="saved" className="w-10/12 mx-auto py-8">
    <div className="mb-8">
      <h2 className="text-2xl font-extrabold text-white uppercase tracking-wider">
        THE LIBRARY
      </h2>
      <p className="text-sm text-zinc-400 mt-1">
        {initialData.length} workouts covering every major muscle group.
      </p>
    </div>

    {initialData.length === 0 ? (
      <div className="rounded-2xl border border-[#292b35] bg-[#15161d] p-6">
        <p className="text-sm text-zinc-400">
          The workout library is temporarily unavailable. Please try again later.
        </p>
        <Link
          href="/Workouts"
          className="mt-3 inline-block text-sm font-semibold text-lime-400 hover:text-lime-300"
        >
          Try again
        </Link>
      </div>
    ) : (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {initialData.map((item) => (
          <Link
            key={item.id}
            href={`/Workouts/${item.id}`}
            className="block bg-[#15161d] border border-[#292b35] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-lime-400 hover:shadow-lg hover:shadow-lime-400/10 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-[#0f1015]"
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
                {item.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="bg-lime-400 text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-extrabold text-white uppercase tracking-wide">
                {item.name}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">{item.equipment}</p>
              <div className="border-t border-zinc-800 my-4" />
              <div className="flex items-center gap-4 text-xs text-zinc-400 align-sub">
                <span>◷ {item.duration} min</span>
                <span>♨ {item.caloriesBurned} kcal</span>
                <span>☆ {item.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )}
  </section>
);

export default Library;
