"use client";

import React, { useContext } from "react";
import { LibraryContext } from "@/Context/LibraryContext";
import type { LibraryItem } from "@/Types/type";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface WishlistButtonProps {
  item: LibraryItem;
}

const WishlistButton = ({ item }: WishlistButtonProps) => {
  const context = useContext(LibraryContext);

  if (!context) {
    return null;
  }

  const { wishlist, setWishlist } = context;
  const router = useRouter();

  const handleWishlist = () => {
    const isAlreadySaved = wishlist.some((savedItem) => savedItem.id === item.id);

    if (!isAlreadySaved) {
      setWishlist([...wishlist, item]);
      toast.success("Saved to your wishlist successfully!");
    } else {
      toast.info("This workout is already in your wishlist!");
    }

    router.push("/listedWorkout?tab=saved");
  };

  return (
    <button
      type="button"
      onClick={handleWishlist}
      className="w-full sm:w-auto flex-1 bg-transparent hover:bg-zinc-800 text-white border border-zinc-700 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
    >
      🔖 Save for later
    </button>
  );
};

export default WishlistButton;
