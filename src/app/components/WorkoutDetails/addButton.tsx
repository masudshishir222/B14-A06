"use client";

import React, { useContext } from 'react';
import { LibraryContext } from '@/Context/LibraryContext';
import type { LibraryItem } from '@/Types/type';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddButtonProps {
  item: LibraryItem;
}

const AddButton = ({ item }: AddButtonProps) => {
  const context = useContext(LibraryContext);

  if (!context) {
    return null;
  }

  const { workout, setWorkout } = context;
  const router = useRouter();

  const handleAdd = () => {
    const isAlreadyAdded = workout.some((w) => w.id === item.id);
    
    if (!isAlreadyAdded) {
      setWorkout([...workout, item]);
      toast.success("Added to today's plan successfully!");
    } else {
      toast.info("This workout is already in your plan!");
    }

    router.push("/listedWorkout?tab=plan");
  };

  return (
    <button 
      className="w-full sm:w-auto flex-1 bg-lime-400 hover:bg-lime-500 text-black font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer" 
      onClick={handleAdd}
    >
      🗓️ Add to today&apos;s plan
    </button>
  );
};

export default AddButton;
