import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { LibraryItem } from "@/Types/type";

interface WorkoutDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { slug } = await params;
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    notFound();
  }

  const workouts: LibraryItem[] = await response.json();
  const workout = workouts.find((item) => String(item.id) === slug);

  if (!workout) {
    notFound();
  }

  return (
    <section className="mx-auto w-11/12 max-w-6xl py-10 sm:py-16 text-white">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-sm font-semibold text-lime-400 transition-colors hover:text-lime-300"
      >
        ← Back to Home
      </Link>

      <div className="rounded-3xl border border-[#292b35] bg-[#12141c] p-6 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden bg-zinc-900">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">

            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
                {workout.name}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-zinc-400 leading-relaxed">
                {workout.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-md bg-lime-400 px-3 py-1 text-xs font-extrabold uppercase text-black tracking-wider"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="rounded-2xl bg-[#181a24] border border-zinc-800/80 overflow-hidden text-sm">
              <div className="flex justify-between items-center px-4 py-3.5 border-b border-zinc-800/60">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Equipment</span>
                <span className="font-semibold text-zinc-200">{workout.equipment}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3.5 border-b border-zinc-800/60">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Difficulty</span>
                <span className="font-semibold text-zinc-200">{workout.difficulty}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3.5 border-b border-zinc-800/60">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Sets</span>
                <span className="font-semibold text-zinc-200">{workout.sets}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3.5 border-b border-zinc-800/60">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Reps</span>
                <span className="font-semibold text-zinc-200">{workout.reps}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3.5 border-b border-zinc-800/60">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Duration</span>
                <span className="font-semibold text-zinc-200">{workout.duration} min</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3.5 border-b border-zinc-800/60">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Calories</span>
                <span className="font-semibold text-zinc-200">{workout.caloriesBurned} kcal</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3.5">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Rating</span>
                <span className="font-semibold text-zinc-200">{workout.rating}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                INSTRUCTIONS
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {workout.instructions.map((instruction, index) => (
                  <li key={`${index}-${instruction}`} className="flex gap-2.5 leading-relaxed">
                    <span className="font-bold text-white">{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button className="w-full sm:w-auto flex-1 bg-lime-400 hover:bg-lime-500 text-black font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2">
                📅 Add to today's plan
              </button>
              <button className="w-full sm:w-auto flex-1 bg-transparent hover:bg-zinc-800 text-white border border-zinc-700 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2">
                🔖 Save for later
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;