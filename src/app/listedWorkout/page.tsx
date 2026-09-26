"use client";

import React, { Suspense, useContext, useEffect, useState } from "react";
import { LibraryContext } from "@/Context/LibraryContext";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const ListedWorkoutContent = () => {
  const context = useContext(LibraryContext);
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<string>("duration");
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [completedHydrated, setCompletedHydrated] = useState(false);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "plan" || tab === "saved") setActiveTab(tab);
  }, [searchParams]);

  useEffect(() => {
    try {
      const savedIds = localStorage.getItem("fitlog-completed-workouts");
      if (savedIds) {
        const parsedIds: unknown = JSON.parse(savedIds);
        if (Array.isArray(parsedIds) && parsedIds.every((id) => typeof id === "number")) {
          setCompletedIds(parsedIds);
        }
      }
    } catch (error) {
      console.error("Could not load completed workout data:", error);
    } finally {
      setCompletedHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!completedHydrated) return;
    localStorage.setItem("fitlog-completed-workouts", JSON.stringify(completedIds));
  }, [completedHydrated, completedIds]);

  if (!context) {
    return <div className="text-center py-20 text-white">Loading...</div>;
  }

  const { workout, setWorkout, wishlist, setWishlist } = context;

  const handleMarkDone = (id: number) => {
    setCompletedIds((currentIds) =>
      currentIds.includes(id) ? currentIds : [...currentIds, id],
    );
    toast.success("Workout marked as done!");
  };

  const currentList = activeTab === "plan" ? workout : wishlist;

  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      setWorkout(workout.filter((item: any) => item.id !== id));
      toast.success("Removed from today's plan.");
    } else {
      setWishlist(wishlist.filter((item: any) => item.id !== id));
      toast.success("Removed from your saved list.");
    }
  };

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((acc: number, item: any) => acc + (Number(item.duration) || 0), 0);
  const totalCalories = currentList.reduce((acc: number, item: any) => acc + (Number(item.caloriesBurned) || 0), 0);


  const sortedList = [...currentList].sort((a: any, b: any) => {
    if (sortBy === "duration") return (b.duration || 0) - (a.duration || 0);
    if (sortBy === "calories") return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
    if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  return (
    <div className="w-10/12 max-w-6xl mx-auto py-10 text-white">

      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-white">
          MY PLAN
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#12141c] border border-zinc-800/80 rounded-2xl p-6 mb-8 shadow-lg">
        <div>
          <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Exercises</p>
          <p className="text-3xl sm:text-4xl font-black text-lime-400 mt-1">{totalExercises}</p>
        </div>
        <div>
          <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Minutes</p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-1">{totalMinutes}</p>
        </div>
        <div>
          <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Calories</p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-1">{totalCalories}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="bg-[#12141c] p-1.5 rounded-full border border-zinc-800 flex items-center gap-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "plan"
                ? "bg-[#1f212d] text-white shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "saved"
                ? "bg-[#1f212d] text-white shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span>Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#12141c] border border-zinc-800 text-white px-3 py-2 rounded-xl outline-none cursor-pointer"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {sortedList.length === 0 ? (
        <div className="bg-[#12141c] border border-dashed border-zinc-800 rounded-3xl p-12 text-center flex flex-col items-center justify-center gap-4">
          <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">
            NOTHING HERE YET
          </h3>
          <p className="text-xs text-zinc-400 max-w-sm">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="mt-2 bg-lime-400 hover:bg-lime-500 text-black font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-lg shadow-lime-400/10"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedList.map((item: any) => (
            <div
              key={item.id}
              className="bg-[#12141c] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all hover:border-zinc-700"
            >

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative w-20 h-20 sm:w-24 sm:h-20 rounded-xl overflow-hidden bg-zinc-900 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">{item.equipment}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-zinc-400 font-medium">
                    <span>⏱ {item.duration} min</span>
                    <span>🔥 {item.caloriesBurned} kcal</span>
                    <span>⭐ {item.rating}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <Link
                  href={`/Workouts/${item.id}`}
                  className="bg-transparent hover:bg-zinc-800 text-zinc-300 border border-zinc-700 font-semibold px-4 py-2.5 rounded-xl text-xs transition-colors"
                >
                  View Details
                </Link>
                {activeTab === "plan" && (
                  <button
                    type="button"
                    onClick={() => handleMarkDone(item.id)}
                    disabled={completedIds.includes(item.id)}
                    className={`font-bold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-1.5 ${
                      completedIds.includes(item.id)
                        ? "bg-zinc-700 text-zinc-300 cursor-default"
                        : "bg-lime-400 hover:bg-lime-500 text-black cursor-pointer"
                    }`}
                  >
                    {completedIds.includes(item.id) ? "✓ Completed" : "✓ Mark as Done"}
                  </button>
                )}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-zinc-500 hover:text-red-400 p-2 transition-colors cursor-pointer"
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Page = () => (
  <Suspense fallback={<div className="text-center py-20 text-white">Loading...</div>}>
    <ListedWorkoutContent />
  </Suspense>
);

export default Page;
