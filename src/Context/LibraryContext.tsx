"use client";

import { createContext, useEffect, useState, type ReactNode, Dispatch, SetStateAction } from "react";
import type { LibraryItem } from "@/Types/type";

export type WorkContextValue = {
  workout: LibraryItem[];
  wishlist: LibraryItem[];
  setWorkout: Dispatch<SetStateAction<LibraryItem[]>>;
  setWishlist: Dispatch<SetStateAction<LibraryItem[]>>;
};

export const LibraryContext = createContext<WorkContextValue | undefined>(undefined);

const WorkContexts = ({ children }: { children: ReactNode }) => {
  const [workout, setWorkout] = useState<LibraryItem[]>([]);
  const [wishlist, setWishlist] = useState<LibraryItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedState = localStorage.getItem("fitlog-library-state");
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        if (Array.isArray(parsedState.workout)) setWorkout(parsedState.workout);
        if (Array.isArray(parsedState.wishlist)) setWishlist(parsedState.wishlist);
      }
    } catch (error) {
      console.error("Could not load saved workout data:", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem(
        "fitlog-library-state",
        JSON.stringify({ workout, wishlist }),
      );
    } catch (error) {
      console.error("Could not save workout data:", error);
    }
  }, [hydrated, workout, wishlist]);

  return (
    <LibraryContext.Provider value={{ workout, setWorkout, wishlist, setWishlist }}>
      {children}
    </LibraryContext.Provider>
  );
};

export default WorkContexts;
