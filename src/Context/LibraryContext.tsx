"use client";

import { createContext, useState, type ReactNode, Dispatch, SetStateAction } from "react";
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

  return (
    <LibraryContext.Provider value={{ workout, setWorkout, wishlist, setWishlist }}>
      {children}
    </LibraryContext.Provider>
  );
};

export default WorkContexts;